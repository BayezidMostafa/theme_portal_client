import styled from "styled-components";
import { banner } from "../../../Assets";

export const BannerSection = styled.div`
    max-width: 75%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-image: url(${banner});
    min-height: 70vh;
    background-size: cover;
    background-repeat: no-repeat;
    @media ${(props) => props.theme.breakpoints.md} {
        min-width: 90%;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        min-width: 100%;
    }


`

export const BannerHeaderText = styled.p`
    font-size: 6rem;
    font-weight: 500;
    color: white;
    text-shadow: 0 0 5px black;
    text-align: center;
    @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    }
`
export const BannerButton = styled.div`
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

export const BannerSectionText = styled.p`
    font-size: 1.2rem;
    color: white;
    @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1rem;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
    font-size: .7rem;
    }
`