import styled from "styled-components";
import { Heading1, Heading5 } from "../../components/core-ui/atoms/Headings";
import { Text } from "../../components/core-ui/atoms/Text";

export const Hero = styled.div`
  background-color: #28293E;
  padding: 0 135px 139px 135px;

  & .hero__wrapper {
    display: flex;
    margin-top: 122px;

    & .hero__wrapper__text {
      margin-right: 142px;
      padding-top: 83px;
      
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
    }
  }
`;