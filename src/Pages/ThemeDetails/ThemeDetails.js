import { Avatar, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { DevInformation, TechStackFont, ThemeDetailsHeaderText, ThemeDetailsSection, ThemeDetailsSectionContainer, ThemeInformationContainer, ThemePictureContainer } from './ThemeDetailsStyle';

const ThemeDetails = () => {
    const themeData = useLoaderData()
    const { title, full_picture, price, main_tech, email, dev_profile, template_features, technologies } = themeData;
    console.log(themeData);
    return (
        <ThemeDetailsSectionContainer>
            <ThemeDetailsHeaderText>
                Here you are seeing {title}'s details
            </ThemeDetailsHeaderText>
            <ThemeDetailsSection>
                <ThemePictureContainer>
                    <img src={full_picture} alt="" />
                </ThemePictureContainer>
                <ThemeInformationContainer>
                    <Typography variant='h5' fontFamily={'arial'} >
                        Template Name: {title}.
                    </Typography>
                    <Typography sx={{marginTop: '5px'}} >
                        Price: ${price}.
                    </Typography>
                    <Typography sx={{marginTop: '5px'}} >
                        Based on {main_tech} technology.
                    </Typography>
                    <Typography sx={{marginTop: '5px'}} >
                        Technologies: {
                            technologies.map((tech, index) => <span style={{fontWeight: '500'}} key={index}>{tech} | </span>)
                        }
                    </Typography>
                    <Typography sx={{marginTop: '5px'}} >
                        <span style={{fontWeight: '500'}} >Features</span>: {template_features}
                    </Typography>
                    <Typography sx={{marginTop: '5px'}} >Developer Information: ➘</Typography>
                    <DevInformation>
                        <Avatar variant='rounded' sx={{ width: 56, height: 56 }} src={dev_profile} />
                        <Typography color='white' >Email: {email}</Typography>
                    </DevInformation>
                </ThemeInformationContainer>
            </ThemeDetailsSection>
        </ThemeDetailsSectionContainer>
    );
};

export default ThemeDetails;