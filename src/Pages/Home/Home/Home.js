import { Box } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import ThemeShowCase from '../ThemeShowCase/ThemeShowCase';

const Home = () => {
    return (
        <Box>
            <Banner/>
            <ThemeShowCase/>
            <Features/>
        </Box>
    );
};

export default Home;