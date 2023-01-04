import styled from "styled-components";

export const AddThemeSection = styled.section`
    width: 75%;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media ${(props) => props.theme.breakpoints.lg} {
        
    }
    @media ${(props) => props.theme.breakpoints.md} {
        
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        
    }
`
export const BannerContainer = styled.div`
    img{
        min-width: 350px;
        @media ${(props) => props.theme.breakpoints.lg} {
        
        }
        @media ${(props) => props.theme.breakpoints.md} {
        
        }
        @media ${(props) => props.theme.breakpoints.sm} {
        
        }
    }
`
export const FormContainer = styled.div`

`