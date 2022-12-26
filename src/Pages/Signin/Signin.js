import { Button, TextField } from '@mui/material';
import React from 'react';
import { FormHeaderText, LoginForm, LoginSection } from '../../Styles/Index';

const Signin = () => {

    const handleOnSubmit = event => {
        event.preventDefault();
    }

    return (
        <LoginSection>
            <LoginForm>
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Sign In</FormHeaderText>
                    <TextField name='email' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='secondary' id="outlined-basic" label="Email" variant="outlined" />
                    <TextField name='password' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='secondary' id="outlined-basic" label="Password" variant="outlined" />
                    <Button sx={{display: 'block', marginTop: '10px'}} fullWidth color='secondary' variant='contained' type='submit'>SignIn</Button>
                </form>
            </LoginForm>
        </LoginSection>
    );
};

export default Signin;

