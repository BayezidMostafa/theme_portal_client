import styled from "styled-components";

export const FeaturesCardContainer = styled.section`
    width: 75%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

`
export const FeaturesCard = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #e0ffe3;
    border-radius: 5px;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition-property: all;
    &:hover{
        box-shadow: 0 0 5px #c5e3c9;
    }
`
export const FeatureCardTitle = styled.p`
    margin: 5px 0;
    font-size: 2rem;
    font-weight: 600;
    color: black;
    text-shadow: 0 0 3px gray;
`
export const FeatureCardText = styled.p`
    font-size: 1rem;
    padding: 0 0 10px 0;
`