import styled from "styled-components";
import { Heading1, Heading5 } from "../../components/core-ui/atoms/Headings";
import { Text } from "../../components/core-ui/atoms/Text";

export const Hero = styled.section`
  background-color: #28293E;
  padding: 10%;

  @media only screen and (max-width: 768px) {
    padding: 5%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${Heading5} {
    margin-bottom: 24px;
    margin-top: 0;
  }

  ${Heading1} {
    margin-top: 0;
    margin-bottom: 24px;
  }

  ${Text} {
    margin-top: 0;
    margin-bottom: 34px;
  }

  button {
    align-self: flex-start;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 30px;
    
    ${Heading1} {
      font-size: 60px !important;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60%;
    }
  }

  @media only screen and (max-width: 425px) {
    img {
      width: 90%;
    }
  }
`;