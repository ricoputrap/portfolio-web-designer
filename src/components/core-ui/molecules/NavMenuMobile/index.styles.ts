import styled from "styled-components"

interface Props {
  open?: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  height: ${props => props.open ? "208px" : 0};
  width: 100%;
  background: #28293E;
  transition: height 0.4s ease-in-out;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div<Props>`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    opacity: ${(props) => (props.open ? 1 : 0)};
    z-index: ${(props) => (props.open ? 1 : -1)};
    padding: 10px;
    justify-content: center;
    transition: ${props => props.open ? "opacity 0.4s ease-in-out 0.3s" : "opacity 0.2s ease-in-out"};    

    &.active {
      background: #282933;
    }
  }
`;