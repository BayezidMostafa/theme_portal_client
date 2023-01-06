import styled from "styled-components";

export const AddThemeSection = styled.section`
    width: 75%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media ${(props) => props.theme.breakpoints.lg} {
        grid-template-columns: repeat(1, 1fr);
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
export const BannerContainer = styled.div`
    width: 80%;
    margin: 10px auto;
    img{
        width: 100%;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
        
    }
    @media ${(props) => props.theme.breakpoints.md} {
    
    }
    @media ${(props) => props.theme.breakpoints.sm} {
    
    }
`
export const FormContainer = styled.div`
    width: 80%;
    margin: 10px auto;
    @media ${(props) => props.theme.breakpoints.lg} {
        
    }
    @media ${(props) => props.theme.breakpoints.md} {
    
    }
    @media ${(props) => props.theme.breakpoints.sm} {
    
    }
`