import styled from "styled-components";

export const ContactSection = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    min-height: 70vh;
    justify-content: space-between;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.md} {
        display: block;
        width: 90%;
        margin: 20px auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
        width: 100%;
    }
`
export const ContactBannerPanel = styled.div`
    width: 50%;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;
        margin: 20px auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`
export const StyledContactForm = styled.div`
    margin: auto;
    width: 40%;
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;
        margin: 20px auto;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 95%;
        margin: auto;
    }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #409E45;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid #409E45;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #53736a;
      color: white;
      border: none;
      &:hover{
        background-color: #416259;
      }
    }
  }
`;