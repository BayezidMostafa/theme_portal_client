
import styled from 'styled-components'


export const BodyBackground = styled.div`
    background-image: linear-gradient(to bottom right, white, #FFFFFF);
    min-height: 100vh;
    background-size: cover;
    border-radius: 10px;
`

export const FormHeaderText = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #416259;
  text-shadow: 0 0 3px #235446;
  margin-bottom: 20px;
`

export const FormFooterText = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: small;
  color: #416259;
`

export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: 100%;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 80%;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  margin: 10px 0;
  padding: 15px 0;
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
    font-size: 14px;
  }
`

export const ButtonFront = styled.button`
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
  font-weight: 600;
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
    background: linear-gradient(270deg, #414141 0%, #000000 100%);
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const ComingSoon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`
export const LoaderFull = styled.div`
  min-height: 78vh;
  min-width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoaderSmall = styled.div`
  min-height: 50vh;
  min-width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableMainContainer = styled.section`
    width: 70%;
    margin: 10px auto;
    @media ${(props) => props.theme.breakpoints.lg} {
        width: 80%;
    }
    @media ${(props) => props.theme.breakpoints.md} {
        width: 90%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
    }
`

