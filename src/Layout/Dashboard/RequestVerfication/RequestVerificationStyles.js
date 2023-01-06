import styled from "styled-components";

export const VerificationSection = styled.section`
    width: 80%;
    margin: 10px auto;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
        margin: 10px auto;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
        margin: 10px auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        margin: 10px auto;
    }
`

export const VerificationBannerContainer = styled.div`
    width: 80%;
    margin: 10px auto;
    img{
        width: 100%;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 80%;

    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`
export const VerificationInformation = styled.div`
    width: 75%;
    margin: 10px auto;
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 80%;
        
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;

    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;

    }
`