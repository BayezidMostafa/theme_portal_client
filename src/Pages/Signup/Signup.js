import { Box, NativeSelect, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { FormFooterText, FormHeaderText, LoaderFull, SecondaryBtn } from '../../Styles/Index';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoginForm, LoginSection } from '../Signin/SigninStyle';
import { signup } from '../../Assets';
import { PhotoCamera } from '@mui/icons-material';
import { ImageInputSignUp } from './SignUpStyle';
import { toast } from 'react-hot-toast';
import Button from '../../Components/Button/Button';
import axios from 'axios';
import { authToken } from '../../Authorization/authToken';
import { SyncLoader } from 'react-spinners';

const Signup = () => {
    const { googleSignIn, createUser, updateUser, loading, setLoading } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = event => {
        setLoading(true);
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const role = form.role.value;
        const image = form.image.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const formData = new FormData()
        formData.append('image', image)

        const userInfo = {
            name,
            email,
            role
        }

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbkey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url;
                createUser(email, password)
                    .then(result => {
                        const profile = {
                            displayName: name,
                            photoURL: image
                        }
                        updateUser(profile)
                            .then(() => {
                                setLoading(false);
                            })
                            .catch(err => {
                                console.error(err.message);
                                setLoading(false)
                            })
                        axios.put('http://localhost:5000/users', userInfo, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('theme-token')}`
                            }
                        })
                            .then(result => {
                                toast.success('Welcome to Theme Portal')
                                authToken(userInfo)
                                setLoading(false);
                                navigate(from, { replace: true });
                            })
                            .catch(err => {
                                setLoading(false)
                                console.error(err.message);
                            })
                    })
                    .catch(err => {
                        console.error(err.message);
                    })
            })

    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        googleSignIn()
            .then(result => {
                const user = result.user;
                const userInfo = {
                    name: user?.displayName,
                    email: user?.email,
                    role: 'client'
                }
                axios.put('http://localhost:5000/users', userInfo, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('theme-token')}`
                    }
                })
                    .then(result => {
                        toast.success('Welcome to Theme Portal')
                        setLoading(false);
                        authToken(result?.user)
                        navigate(from, { replace: true });
                    })
                    .catch(err => {
                        setLoading(false);
                        console.error(err.message);
                    })
            })
            .catch(err => {
                console.error(err.message)
                setLoading(false)
            })
    }

    if (loading) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    return (
        <LoginSection>
            <Box sx={{ width: '40%', display: { xs: 'none', sm: 'none', md: 'block' } }} >
                <img src={signup} alt="" />
            </Box>
            <LoginForm>
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Sign Up</FormHeaderText>
                    <TextField size='small' type='text' name='name' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Name" variant="outlined" />
                    <NativeSelect sx={{ marginY: '10px' }} variant='contained' fullWidth color='success' name='role' >
                        <option value="client">Client</option>
                        <option value="developer">Developer</option>
                    </NativeSelect>
                    <ImageInputSignUp>
                        <input name='image' required type="file" />
                        <PhotoCamera color='success' />
                    </ImageInputSignUp>
                    <TextField size='small' name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField size='small' name='password' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" type='password' label="Password" variant="outlined" />
                    <Button type="submit" >Sign Up</Button>
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem' }}>
                    <SecondaryBtn onClick={handleGoogleSignIn} ><GoogleIcon sx={{ color: '#2467ed' }} /></SecondaryBtn>
                </Box>
                <FormFooterText>
                    Already have an account <Link to='/signin' style={{ color: '#2E7D32', textDecoration: 'underline' }} >Sign In</Link>
                </FormFooterText>
            </LoginForm>
        </LoginSection>
    );
};

export default Signup;