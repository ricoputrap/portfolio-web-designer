import styled from "styled-components"

export const ButtonBase = styled.button`
  font-weight: 900;
  font-family: 'Epilogue', sans-serif;
  font-size: 14px;
  line-height: 14.35px;
  padding: 18px 27px;
  border-radius: 6px;
  border: none;
  background-color: #EF6D58;
  color: white;
  text-transform: uppercase;

  &:hover {
    background-color: #D26756;
    cursor: pointer;
  }
`;

export const ButtonLight = styled(ButtonBase)`
  background-color: #FFFFFF;
  box-shadow: 0px 3px 9px rgba(57, 20, 0, 0.08);
  color: #391400;

  &:hover {
    background-color: #F0F0F0;
  }
`;

export const ButtonDark = styled(ButtonBase)`
  background-color: #B550F8;
  color: #FFFFFF;

  &:hover {
    background-color: #8729C6;
  }
`;

export const ButtonOutlined = styled(ButtonBase)`
  border: 1px solid #B550F8;
  background-color: transparent;
  color: #FFFFFF;

  &:hover {
    background-color: #464646;
  }
`;