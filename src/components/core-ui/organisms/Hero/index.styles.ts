import styled from "styled-components";
import { Heading1 } from "../../atoms/Headings";
import { Text } from "../../atoms/Text";

export const ContentWrapper = styled.div`
  background-color: #28293E;
  padding: 10%;

  @media only screen and (max-width: 768px) {
    padding: 15% 10% 20%;
  }
`;

export const TextContainer = styled.div`
  text-align: center;

  ${Heading1} {
    margin-top: 0;
    margin-bottom: 24px;
  }

  ${Text} {
    margin: 0;
  }
`;