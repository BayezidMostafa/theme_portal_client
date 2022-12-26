import { Box, Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { FormHeaderText, LoginForm, LoginSection } from '../../Styles/Index';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AuthContext } from '../../Context/Authentication/Authentication';

const Signin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleOnSubmit = event => {
        event.preventDefault();
    }

    return (
        <LoginSection>
            <LoginForm >
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Sign In</FormHeaderText>
                    <TextField size='small' name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='secondary' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField size='small' name='password' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='secondary' id="outlined-basic" label="Password" variant="outlined" />
                    <Button sx={{ display: 'block', marginTop: '10px' }} fullWidth color='secondary' variant='contained' type='submit'>SignIn</Button>
                </form>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.5rem' }}>
                    <Button onClick={googleSignIn} fullWidth color='secondary' variant='outlined' sx={{ marginTop: '10px', fontSize: '1.2rem' }} ><GoogleIcon sx={{color: '#2467ed'}} /></Button>
                    <Button onClick={githubSignIn} fullWidth color='secondary' variant='outlined' sx={{ marginTop: '10px', fontSize: '1.2rem' }} ><GitHubIcon sx={{color: 'black'}} /></Button>
                </Box>
            </LoginForm>
        </LoginSection>
    );
};

export default Signin;

