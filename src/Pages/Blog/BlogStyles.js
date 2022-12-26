import styled from "styled-components";

export const Header = styled.h2`
    text-align: center;
    font-size: 5rem;
    font-weight: 900;
    color: ${props => props.white ? 'black' : 'white' };
    margin: 0;
`