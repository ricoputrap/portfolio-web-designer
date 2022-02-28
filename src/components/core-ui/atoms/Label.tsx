import styled from "styled-components";

interface LabelProps {
  readonly isLight?: boolean;
}

const Label = styled.span<LabelProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 12.3px;
  color: ${props => props.isLight ? "#FFFFFF" : "#391400"};
`;

export default Label;