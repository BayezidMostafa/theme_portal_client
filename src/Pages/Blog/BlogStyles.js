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
    color: #416259;
    text-shadow: 0 0 3px #235446;
    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 3rem;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 2rem;
    }
`