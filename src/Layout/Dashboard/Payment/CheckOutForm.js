import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/Authentication/Authentication';

const CheckOutForm = ({ themeInfo }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const { price, email, _id, booking_id, title } = themeInfo;
    console.log(booking_id);

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('theme-token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            const paymentData = {
                price,
                transactionID: paymentIntent.id,
                email,
                booking_id,
                title,
                customer_Name: user?.displayName
            }
            fetch('http://localhost:5000/payments', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                },
                body: JSON.stringify(paymentData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    console.log(data);
                    toast.success('Thanks For The Payment')
                    setSuccess('Thanks For The Payment');
                    setTransactionID(paymentIntent.id);
                })
        }
        setProcessing(false);


    }

    return (
        <Box className='mt-10'>
            <form onSubmit={handleFormSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button
                    className=''
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </Button>
            </form>
            <Typography color='error' >{cardError}</Typography>
            {
                success && <div>
                    <Typography color="success">{success}</Typography>
                    <Typography variant='h6' color='success' >Your transactionId: {transactionID}</Typography>
                </div>
            }
        </Box>
    );
};

export default CheckOutForm;