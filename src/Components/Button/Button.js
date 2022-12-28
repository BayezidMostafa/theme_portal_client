import React from 'react';
import { ButtonBack, ButtonFront } from '../../Styles/Index';
import { fadeIn } from '../../utils/motion';

const Button = (props) => (
    <ButtonBack
        variants={fadeIn('up', 'tween', 0.5, 1)}
        alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
);

export default Button