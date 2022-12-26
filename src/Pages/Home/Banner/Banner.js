import { Box, Button } from '@mui/material';
import React from 'react';
import { BannerSection, BannerHeaderText, BannerSectionText, BannerButton } from './BannerStyle';


const Banner = () => {
    return (
        <div>
            <BannerSection>
                <BannerHeaderText>Grab your <br /> favorite one!
                    <BannerSectionText>Find thousands of easily customizable themes, templates, <br /> and whole websites created by top developers.
                    </BannerSectionText>
                    <Button as="a" size='large' href='#' color="success" variant="outlined" >Explore Now</Button>
                </BannerHeaderText>
            </BannerSection>
        </div>
    );
};

export default Banner;