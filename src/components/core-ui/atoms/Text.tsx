import styled from "styled-components";

interface TextProps {
  readonly isGray?: boolean;
  readonly isLightGray?: boolean;
  readonly isLight?: boolean;
  readonly isBig?: boolean;
  readonly isSmall?: boolean;
}

interface ChildrenProps {
  children: React.ReactNode
}

export const Text = styled.p<TextProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  font-size: ${props => props.isBig ? "20px" : props.isSmall ? "14px" : "16px"};
  line-height: ${props => props.isSmall ? "24px" : "32px"};
  color: ${props => props.isGray ? "rgba(57, 20, 0, 0.64)" :
    props.isLightGray ? "rgba(255, 255, 255, 0.64)" :
    props.isLight ? "#FFFFFF" : "#391400"}
`;

export const TextBig: React.FC<ChildrenProps> = ({ children }) => (
  <Text isBig>{children}</Text>
)
export const TextSmall: React.FC<ChildrenProps> = ({ children }) => (
  <Text isSmall>{children}</Text>
)
export const TextGray: React.FC<ChildrenProps> = ({ children }) => (
  <Text isGray>{children}</Text>
)
export const TextLight: React.FC<ChildrenProps> = ({ children }) => (
  <Text isLight>{children}</Text>
)
export const TextLightBig: React.FC<ChildrenProps> = ({ children }) => (
  <Text isLight isBig>{children}</Text>
)
export const TextLightGray: React.FC<ChildrenProps> = ({ children }) => (
  <Text isLightGray>{children}</Text>
)
export const TextLightGraySmall: React.FC<ChildrenProps> = ({ children }) => (
  <Text isLightGray isSmall>{children}</Text>
)