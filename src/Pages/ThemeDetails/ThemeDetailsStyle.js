import styled from "styled-components";

export const ThemeDetailsSectionContainer = styled.section`
    width: 75%;
    margin: 3rem auto;
`

export const ThemeDetailsHeaderText = styled.h2`
    text-align: center;
    font-size: 2rem;
`

export const ThemeDetailsSection = styled.section`
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: block;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        display: block;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
    }
`
export const ThemePictureContainer = styled.div`
    img{
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`
export const ThemeInformationContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`
export const DevInformation = styled.div`
    width: 80%;
    background: linear-gradient(#e1e4e8, #aeafb0);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
