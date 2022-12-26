import styled from "styled-components";
import { banner } from "../../../Assets";

export const BannerSection = styled.div`
    max-width: 75%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 10px;
    background-image: url(${banner});
    min-height: 70vh;
    background-size: cover;
    background-repeat: no-repeat;
`

export const BannerHeaderText = styled.p`
    font-size: 2rem;
    font-weight: 700;
    padding-left: 50px;
    color: #dcf7e3;
`
export const BannerSectionText = styled.p`
    font-size: 1rem;
    color: white;
`
export const BannerButton = styled.button`
    
`