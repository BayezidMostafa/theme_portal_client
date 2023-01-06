import styled from "styled-components";

export const ThemeDetailsSectionContainer = styled.section`
    width: 75%;
    margin: 3rem auto;
`

export const ThemeDetailsHeaderText = styled.h2`
    text-align: center;
    font-size: 2rem;
`

export const ThemeDetailsSection = styled.section`
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    gap: 2rem;
    @media ${(props) => props.theme.breakpoints.lg} {
        display: block;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        display: block;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
    }
`
export const ThemePictureContainer = styled.div`
    img{
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
`
export const ThemeInformationContainer = styled.div`
    width: 100%;
    margin: 0 auto;
`
export const DevInformation = styled.div`
    margin: 1rem auto;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const ThemeButtonContainer = styled.div`
    gap: .5rem;
    display: flex;
`
export const ButtonContainerThemeDetails = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 20px 0;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {

  }

  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`

export const ButtonThemeDetails = styled.button`
  border: none;
  border-radius: 5px;
  padding: 15px 0;
  color: white;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #357865, #1b6953);
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 90%;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: gray;
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`
