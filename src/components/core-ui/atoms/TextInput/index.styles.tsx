import styled from 'styled-components';

interface WrapperProps {
  width?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: #FFFFFF;
  width: ${props => props.width || "fit-content"};
  border-radius: 6px;
  border: 1px solid #F3D1BF;
  box-sizing: border-box;
`;

export const Input = styled.input`
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  border: 0;
  padding: 10px 10px 10px 10px;
`;