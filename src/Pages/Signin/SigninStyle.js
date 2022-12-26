import styled from "styled-components"

export const LoginSection = styled.section`
    max-width: 75%;
    margin: auto;
    display: flex;
    min-height: 80vh;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40vh;
    border-radius: 7px;
    width: 25%;
    padding: 25px;
    margin: auto;
    
  @media ${(props) => props.theme.breakpoints.xl} {
    width: 30vw;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40vw;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 60vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 98vw;
  }
`