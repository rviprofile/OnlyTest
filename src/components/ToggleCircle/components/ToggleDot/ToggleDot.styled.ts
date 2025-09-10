import styled from "styled-components";
import { ToggleDotProps } from "./ToggleDot.types";

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: #42567a;
  border: 1px #42567a solid;
  transition: all 0.4s ease-in-out;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .content {
    opacity: 0;
    color: #42567a;
  }
  &:hover {
    width: 56px;
    height: 56px;
    background-color: #e5e5e5;
    .content {
      opacity: 1;
    }
  }
`;

export const DotHoverBox = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["isChosen", "coords", "counterRotation"].includes(prop),
})<ToggleDotProps>`
  width: 56px;
  height: 56px;
  position: absolute;
  top: ${(props) => `${props.coords.y}px`};
  left: ${(props) => `${props.coords.x}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%)
    rotate(${(props) => props.counterRotation}deg);
  transition: transform 1s ease-in-out;
  &:hover {
    ${Dot} {
      width: 56px;
      height: 56px;
      background-color: #e5e5e5;
      .content {
        opacity: 1;
      }
    }
  }
  ${(props) =>
    props.isChosen &&
    `
    ${Dot} {
    width: 56px;
    height: 56px;
    background-color: #e5e5e5;
    .content {
      opacity: 1;
    }
    }
    `}
`;
