import styled from "styled-components";

export const DashboardSection = styled.section`

`
export const ButtonContainer = styled.div`
    width: 150px;
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

    @media ${(props) => props.theme.breakpoints.lg} {
        width: 120px;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        
    }
`

export const ButtonMain = styled.button`
    font-size: .9rem;
    font-weight: 600;
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
        background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
        opacity: 0.5;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: .7rem;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 14px;
    }
`


export const ButtonContainerSideBar = styled.div`
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

    }
`

export const ButtonMainSideBar = styled.button`
    font-size: 8rem;
    border: none;
    border-radius: 5px;
    padding: 15px 0;
    color: white;
    display: flex;
    position: absolute;
    top: 0;
    width: 90%;
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
        background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
        opacity: 0.5;
        box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
    } 

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: ${({ alt }) => alt ? '20px' : '16px'};
    }

    @media ${(props) => props.theme.breakpoints.sm} {

    }
`
export const LinkContainer = styled.div`
    a{
        color: #6A817A;
        margin: 0 10px;
        &:hover{
            color: #4a786a;
        }
        &:active{
            color: #104736;
        }
        @media ${(props) => props.theme.breakpoints.md} {
        font-size: 14px;
        }
    }
    
`