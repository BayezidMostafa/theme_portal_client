import { Avatar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { LoaderFull } from '../../Styles/Index';
import { DevInformation, ThemeDetailsHeaderText, ThemeDetailsSection, ThemeDetailsSectionContainer, ThemeInformationContainer, ThemePictureContainer } from './ThemeDetailsStyle';

const ThemeDetails = () => {
    const { user } = useContext(AuthContext)
    const { email: userEmail } = user;
    const themeData = useLoaderData()
    const navigation = useNavigation()
    let isNormalLoad = navigation.state === "loading" && navigation.formData == null;

    if (isNormalLoad) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }

    const { thumb, title, full_picture, price, main_tech, email, dev_profile, live_preview, template_features, technologies } = themeData;

    const handleBookTheme = () => {

        const order = {
            userEmail,
            title,
            thumb,
            price,
            live_preview
        }

        axios.put('http://localhost:5000/order', order)
            .then(res => {
                console.log(res);
            })
    }

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
                    <Typography color='blue' as='a' target='_blank' href={live_preview} sx={{ marginTop: '5px' }} >
                        Live Preview
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} >
                        Price: ${price}.
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} >
                        Based on {main_tech} technology.
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} >
                        Technologies: {
                            technologies.map((tech, index) => <span style={{ fontWeight: '500' }} key={index}>{tech} | </span>)
                        }
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} >
                        <span style={{ fontWeight: '500' }} >Features</span>: {template_features}
                    </Typography>
                    <Typography sx={{ marginTop: '5px' }} >Developer Information: ➘</Typography>
                    <DevInformation>
                        <Avatar variant='rounded' sx={{ width: 56, height: 56 }} src={dev_profile} />
                        <Typography color='white' >Email: {email}</Typography>
                    </DevInformation>
                    <Button onClick={handleBookTheme} >Book Now</Button>
                </ThemeInformationContainer>
            </ThemeDetailsSection>
        </ThemeDetailsSectionContainer>
    );
};

export default ThemeDetails;