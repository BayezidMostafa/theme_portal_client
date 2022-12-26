import { Box, Button, InputLabel, MenuItem, NativeSelect, Select, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { FormFooterText, FormHeaderText } from '../../Styles/Index';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { LoginForm, LoginSection } from '../Signin/SigninStyle';
import { signup } from '../../Assets';

const Signup = () => {

    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleOnSubmit = event => {
        event.preventDefault()
    }

    return (
        <LoginSection>
            <Box sx={{ width: '40%', display: { xs: 'none', sm: 'none', md: 'block' } }} >
                <img src={signup} alt="" />
            </Box>
            <LoginForm>
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Sign Up</FormHeaderText>
                    <TextField size='small' name='name' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Name" variant="outlined" />
                    <NativeSelect sx={{marginY: '10px'}} variant='contained' fullWidth color='success' name='role' >
                        <option value="client">Client</option>
                        <option value="developer">Developer</option>
                    </NativeSelect>

                    <TextField size='small' name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField size='small' name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField size='small' name='password' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Password" variant="outlined" />
                    <Button sx={{ display: 'block', marginTop: '10px' }} fullWidth color='success' variant='contained' type='submit'>SignIn</Button>
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem' }}>
                    <Button onClick={googleSignIn} fullWidth color='success' variant='outlined' sx={{ marginTop: '10px', fontSize: '1.2rem' }} ><GoogleIcon sx={{ color: '#2467ed' }} /></Button>
                    <Button onClick={githubSignIn} fullWidth color='success' variant='outlined' sx={{ marginTop: '10px', fontSize: '1.2rem' }} ><GitHubIcon sx={{ color: 'black' }} /></Button>
                </Box>
                <FormFooterText>
                    Already have an account <Link to='/signin' style={{ color: '#2E7D32', textDecoration: 'underline' }} >Sign In</Link>
                </FormFooterText>
            </LoginForm>
        </LoginSection>
    );
};

export default Signup;