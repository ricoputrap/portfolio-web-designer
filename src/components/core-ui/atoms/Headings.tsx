import styled from "styled-components";

interface HeadingProps {
  readonly isLight?: boolean;
}

export const Heading1 = styled.h1<HeadingProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 800;
  font-size: 72px;
  line-height: 80px;
  letter-spacing: -2px;
  color: ${props => props.isLight ? "#FFFFFF" : "#391400"};
`;
export const Heading2 = styled.h2<HeadingProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 800;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: -1px;
  color: ${props => props.isLight ? "#FFFFFF" : "#391400"};
`;
export const Heading3 = styled.h3<HeadingProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: ${props => props.isLight ? "#FFFFFF" : "#391400"};
`;
export const Heading4 = styled.h4<HeadingProps>`
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.isLight ? "#FFFFFF" : "#391400"};
`;
export const Heading5 = styled.h5`
  font-family: 'Epilogue', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  color: #EF6D58;
`;