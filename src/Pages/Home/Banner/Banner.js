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
                <Button sx={{marginTop: '20px'}} as="a" size='large' href='#' color="info" variant="outlined" >Explore Now</Button>
            </BannerSection>
        </div>
    );
};

export default Banner;