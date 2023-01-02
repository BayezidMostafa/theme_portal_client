import styled from "styled-components";

export const FeaturesCardContainer = styled.section`
    width: 75%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(2, 1fr);
        width: 75%;
        margin: 20px auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`
export const FeaturesCard = styled.div`
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    border: 2px solid #F5F5F5;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-duration: 300ms;
    &:hover{
        box-shadow: 0 0 5px #E8E8E8;
    }
`
export const FeatureCardTitle = styled.p`
    margin: 5px 0;
    font-size: 2rem;
    font-weight: 600;
    color: black;
    text-shadow: 0 0 3px gray;
    @media ${(props) => props.theme.breakpoints.md}{
        font-size: 1.5rem;
    }
    @media ${(props) => props.theme.breakpoints.sm}{
        font-size: 1.2rem;
    }
`
export const FeatureCardText = styled.p`
    font-size: 1rem;
    padding: 0 0 10px 0;
`