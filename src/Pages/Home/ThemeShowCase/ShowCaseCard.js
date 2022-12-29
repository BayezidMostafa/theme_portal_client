
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShowCaseCardSection } from './ShowCaseCardStyle';

const ShowCaseCard = ({theme}) => {
    const {thumb} = theme;
    return (
        <ShowCaseCardSection>
            <img src={thumb} alt="" />
            <div>
                <Button as={Link} to="/" >Explore</Button>
            </div>
        </ShowCaseCardSection>
    );
};

export default ShowCaseCard;