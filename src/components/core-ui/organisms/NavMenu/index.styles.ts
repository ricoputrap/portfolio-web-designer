import styled from "styled-components";
import { Text } from "../../atoms/Text";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Text} {
    margin-right: 97px;

    &:last-of-type {
      margin: 0;
    }
  }
`;