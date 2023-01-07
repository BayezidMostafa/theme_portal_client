import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorSection } from './ErrorStyle';

const Error = () => {
    return (
        <ErrorSection>
            <Button as={Link} to="/" variant='contained' color='success' >Go Home</Button>
        </ErrorSection>
    );
};

export default Error;