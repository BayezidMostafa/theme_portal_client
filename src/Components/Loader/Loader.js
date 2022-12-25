import { Box } from '@mui/material';
import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Box sx={{minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </Box>
    );
};

export default Loader;