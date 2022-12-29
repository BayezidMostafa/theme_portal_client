
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShowCaseCardSection } from './ShowCaseCardStyle';

const ShowCaseCard = ({theme}) => {
    const {thumb, _id} = theme;
    return (
        <ShowCaseCardSection>
            <img src={thumb} alt="" />
            <div>
                <Button variant='contained' color='success' as={Link} to={`/themes/${_id}`} >Explore</Button>
            </div>
        </ShowCaseCardSection>
    );
};

export default ShowCaseCard;