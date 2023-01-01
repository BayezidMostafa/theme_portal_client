import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { FormFooterText, FormHeaderText, LoaderFull, SecondaryBtn } from '../../Styles/Index';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { LoginForm, LoginSection } from './SigninStyle';
import { signInLogo } from '../../Assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Button from '../../Components/Button/Button';
import { authToken } from '../../Authorization/authToken';
import { SyncLoader } from 'react-spinners';

const Signin = () => {
    const { userSignIn, googleSignIn, loading, setLoading } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(result => {
                const user = result?.user;
                authToken(user)
                toast.success('Successfully Logged In')
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
            })
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        googleSignIn()
            .then(result => {
                const user = result?.user;
                if (result.user) {
                    const userInfo = {
                        name: user?.displayName,
                        email: user?.email,
                        role: 'client'
                    }
                    fetch('http://localhost:5000/users', {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('theme-token')}`
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            authToken(user)
                            console.log(data);
                            toast.success('Google Log In Successful')
                            setLoading(false)
                            navigate(from, { replace: true })
                        })

                }
            })
            .catch(err => {
                console.error(err.message)
                setLoading(false)
            })
    }

    if (loading) {
        return (
            <LoaderFull>
                <SyncLoader color="#36d7b7" />
            </LoaderFull>
        )
    }

    return (
        <LoginSection>
            <Box sx={{ width: '40%', display: { xs: 'none', sm: 'none', md: 'block' } }} >
                <img src={signInLogo} alt="" />
            </Box>
            <LoginForm >
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Sign In</FormHeaderText>
                    <TextField size='small' name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField size='small' name='password' type='password' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Password" variant="outlined" />
                    <Button type="submit" >SIGN IN</Button>
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem' }}>
                    <SecondaryBtn onClick={handleGoogleSignIn}><GoogleIcon sx={{ color: '#2467ed' }} /></SecondaryBtn>
                </Box>
                <FormFooterText>
                    Need to create an account <Link to='/signup' style={{ color: '#2E7D32', textDecoration: 'underline' }} >Sign Up</Link>
                </FormFooterText>
            </LoginForm>
        </LoginSection>
    );
};

export default Signin;

