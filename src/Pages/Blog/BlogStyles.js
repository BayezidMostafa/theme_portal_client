import styled from "styled-components";

export const BlogContainer = styled.section`
    min-height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BlogHeadingText  = styled.p`
    font-size: 5rem;
    font-weight: lighter;
    color: green;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 3rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2rem;
    }
`