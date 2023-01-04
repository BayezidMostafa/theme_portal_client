import { PhotoCamera } from '@mui/icons-material';
import { Box, Checkbox, InputLabel, ListItemText, MenuItem, NativeSelect, OutlinedInput, Select, TextareaAutosize, TextField } from '@mui/material';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AddThemeBanner } from '../../../Assets';
import Button from '../../../Components/Button/Button';
import { AuthContext } from '../../../Context/Authentication/Authentication';
import { ImageInputSignUp } from '../../../Pages/Signup/SignUpStyle';
import { FormHeaderText } from '../../../Styles/Index';
import { AddThemeSection, BannerContainer, FormContainer } from './AddTemplatesStyles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Bootstrap',
    'Styled Components',
    'MUI',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Three.js',
    'Stripe.js',
    'Swiper.js',
    'Firebase',
    'Vercel',
    'React Router DOM',
    'React Photo View',
    'JWT Auth'
];

const AddTemplates = () => {

    const { user } = useContext(AuthContext);
    const [tech, setTech] = React.useState([]);

    const handleOnSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image_1 = form.thumb.files[0];
        const image_2 = form.full_picture.files[0];
        const price = form.price.value;
        const main_tech = form.main_tech.value;
        const live_preview = form.live_preview.value;
        const features = form.features.value;

        const thumbData = new FormData();
        thumbData.append('image', image_1);
        const fullPicData = new FormData();
        fullPicData.append('image', image_2);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbkey}`, {
            method: 'POST',
            body: thumbData
        })
            .then(res => res.json())
            .then(data => {
                const thumb = data.data.display_url;
                fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbkey}`, {
                    method: 'POST',
                    body: fullPicData
                })
                    .then(res => res.json())
                    .then(data => {
                        const full_picture = data.data.display_url;
                        const theme = {
                            title,
                            thumb,
                            full_picture,
                            price,
                            main_tech,
                            live_preview,
                            email: user?.email,
                            dev_profile: user?.photoURL,
                            verified: false,
                            template_features: features,
                            technologies: tech
                        }
                        axios.put('http://localhost:5000/theme', theme, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('theme-token')}`
                            }
                        })
                        .then(res => {
                            console.log(res.data);
                            toast.success('Theme Uploaded Successfully')
                        })
                    })
            })

    }

    console.log(tech);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setTech(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <AddThemeSection>
            <BannerContainer>
                <img src={AddThemeBanner} alt="" />
            </BannerContainer>
            <FormContainer>
                <form onSubmit={handleOnSubmit} >
                    <FormHeaderText>Add Your theme</FormHeaderText>
                    <TextField size='small' type='text' name='title' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Theme Name" variant="outlined" />
                    <InputLabel id="demo-multiple-checkbox-label">Technologies</InputLabel>
                    <Select
                        size='small'
                        fullWidth
                        sx={{ marginBottom: '10px' }}
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        color='success'
                        value={tech}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={tech.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                    <label htmlFor="thumb">Thumbnail</label>
                    <Box sx={{ marginBottom: '10px' }} >
                        <ImageInputSignUp>
                            <input style={{ width: '100%' }} id='thumb' name='thumb' required type="file" />
                            <PhotoCamera color='success' />
                        </ImageInputSignUp>
                    </Box>
                    <Box>
                        <label htmlFor="full_picture">Full Picture</label>
                        <ImageInputSignUp>
                            <input style={{ width: '100%' }} id='full_picture' name='full_picture' required type="file" />
                            <PhotoCamera color='success' />
                        </ImageInputSignUp>
                    </Box>
                    <TextField size='small' name='price' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Price" variant="outlined" />
                    <TextField size='small' name='main_tech' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Main Technology" variant="outlined" />
                    <TextField size='small' name='live_preview' sx={{ display: 'block', minWidth: '100%', marginTop: '10px' }} fullWidth color='success' id="outlined-basic" label="Live Link" variant="outlined" />
                    <textarea placeholder='Theme Features' style={{ width: '100%', marginTop: '10px', paddingTop: '5px', paddingLeft: '10px' }} name="features" id="" rows="5"></textarea>
                    <Button type="submit" >Sign Up</Button>
                </form>
            </FormContainer>
        </AddThemeSection>
    );
};

export default AddTemplates;