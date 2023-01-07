import { Button } from '@mui/material';
import React from 'react';
import { BannerSection, BannerHeaderText, BannerSectionText } from './BannerStyle';


const Banner = () => {
    return (
        <div>
            <BannerSection>
                <BannerHeaderText>Hello there!
                </BannerHeaderText>
                <BannerSectionText>Find thousands of easily customizable themes, templates, <br /> and whole websites created by top developers.
                </BannerSectionText>
                <Button size='large' as="a" href="#showcase" variant='contained' sx={{marginTop: '10px'}} color='success'>Explore Now</Button>
            </BannerSection>
        </div>
    );
};

export default Banner;