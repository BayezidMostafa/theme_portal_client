import styled from "styled-components";

export const ShowCaseSection = styled.section`
    width: 75%;
    margin: 5rem auto;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;

    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 95%;
    } 
`

export const ShowCaseHeader = styled.p`
    padding: 0 0 10px 0;
    font-size: 2rem;
    font-weight: 600;
    color: #2f2f38;
    @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.8rem;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.7rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 1rem;
    } 
`
export const ShowCaseData = styled.div`
    position: relative;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    @media ${(props) => props.theme.breakpoints.xl} {
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
    } 
`
export const LoadMoreButtonContainer = styled.div`
    margin: auto;
    width: 20%;
    height: auto;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 30%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 50%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 50%;
    }
`
