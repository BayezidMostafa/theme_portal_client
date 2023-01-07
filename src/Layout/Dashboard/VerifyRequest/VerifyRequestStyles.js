import styled from "styled-components";

export const VerifySection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 80%;
    margin: 10px auto;
    gap: 1rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: repeat(1, 1fr);
        width: 85%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`