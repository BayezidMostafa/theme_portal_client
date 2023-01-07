import { Box } from '@mui/system';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import { PaymentSection } from './PaymentStyle';


const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY);

const Payment = () => {

    const themeInfo = useLoaderData();
    console.log(themeInfo);
    const { title, price } = themeInfo;


    return (
        <PaymentSection>
            <p>Please Pay {price} for your {title} Theme </p>
            <Box>
                <Elements stripe={stripePromise}>
                    <CheckOutForm themeInfo={themeInfo} />
                </Elements>
            </Box>
        </PaymentSection>
    );
};

export default Payment;