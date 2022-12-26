import styled from "styled-components";
import { banner } from "../../../Assets";

export const BannerSection = styled.div`
    max-width: 75%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-image: url(${banner});
    min-height: 70vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media ${(props) => props.theme.breakpoints.md} {
        min-width: 90%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        min-width: 100%;
    }


`

export const BannerHeaderText = styled.p`
    font-size: 6rem;
    font-weight: 500;
    color: #dcf7e3;
    text-align: center;
    @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    }
`
export const BannerSectionText = styled.p`
    font-size: 1.2rem;
    color: white;
    @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: .7rem;
    }
`