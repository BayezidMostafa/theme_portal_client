import styled from "styled-components";

export const OrderSectionContainer = styled.section`
    width: 75%;
    margin: 0 auto;
    min-height: 70vh;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    @media ${(props) => props.theme.breakpoints.xl}{
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.lg}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.md}{
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        grid-template-columns: repeat(1, 1fr);
    }
`