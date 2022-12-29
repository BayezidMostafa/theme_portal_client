import styled from "styled-components";

export const ShowCaseCardSection = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    img{
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }
    div{
        transition: .3s ease-in-out;
        opacity: 0;
        position: absolute;
        /* top: 50%; */
        height: 100%;
        width: 100%;
        bottom: -10%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover img{
        opacity:.8;
    }
    &:hover div {
        height: 100%;
        width: 100%;
        bottom: -0%;
        opacity: 1;
    }
`