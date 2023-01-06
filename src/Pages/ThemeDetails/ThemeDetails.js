import { Avatar, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/Authentication/Authentication';
import { LoaderFull } from '../../Styles/Index';
import { ButtonContainerThemeDetails, ButtonThemeDetails, DevInformation, ThemeButtonContainer, ThemeDetailsHeaderText, ThemeDetailsSection, ThemeDetailsSectionContainer, ThemeInformationContainer, ThemePictureContainer } from './ThemeDetailsStyle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ThemeDetails = () => {
    const themeData = useLoaderData()
    const { thumb, _id, title, full_picture, price, main_tech, email, dev_profile, live_preview, template_features, technologies, } = themeData;
    const { user } = useContext(AuthContext)
    const { email: userEmail } = user;
    const { data: orderStatus = [], refetch } = useQuery({
        queryKey: ['orderStatus'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/order/${_id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('theme-token')}`
                }
            })
            return res.data;
        }
    })
    console.log(orderStatus);
    const navigation = useNavigation()
    let isNormalLoad = navigation.state === "loading" && navigation.formData == null;

    if (isNormalLoad) {
        return (
            <LoaderFull>
                <SyncLoader color="#2e5248" />
            </LoaderFull>
        )
    }
    const handleBookTheme = () => {
        const order = {
            booking_id: _id,
            userEmail,
            title,
            thumb,
            price,
            live_preview
        }
        axios.put('http://localhost:5000/order', order)
            .then(res => {
                if (res.data.upsertedCount !== 1) {
                    return toast.error('Already Added')
                }
                refetch()
                toast.success('Successfully Ordered')
            })
    }
    const handleWishlist = () => {
        const wishlist = {
            booking_id: _id,
            userEmail,
            title,
            thumb,
            price,
            live_preview
        }
        axios.put('http://localhost:5000/wishlist', wishlist)
            .then(res => {
                console.log(res);
                if (res.data.upsertedCount !== 1) {
                    return toast.error('Already Added')
                }
                toast.success('Successfully Added To Wishlist')
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
                        <Typography as="a" href={`mailto:${email}`} sx={{}} color='inherit' >
                            <EmailOutlinedIcon fontSize='large' />
                        </Typography>
                    </DevInformation>
                    <ThemeButtonContainer>
                        <ButtonContainerThemeDetails>
                            {
                                orderStatus.length !== 0 ?
                                    <>
                                        <ButtonThemeDetails disabled onClick={handleWishlist} >Already Booked</ButtonThemeDetails>
                                    </>
                                    :
                                    <>
                                        <ButtonThemeDetails onClick={handleWishlist} >Add To Wishlist</ButtonThemeDetails>
                                    </>
                            }
                        </ButtonContainerThemeDetails>
                        <ButtonContainerThemeDetails>
                            <ButtonThemeDetails onClick={handleBookTheme} >Book This Product</ButtonThemeDetails>
                        </ButtonContainerThemeDetails>
                    </ThemeButtonContainer>
                </ThemeInformationContainer>
            </ThemeDetailsSection>
        </ThemeDetailsSectionContainer>
    );
};

export default ThemeDetails;