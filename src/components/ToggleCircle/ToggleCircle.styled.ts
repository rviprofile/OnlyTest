import styled from "styled-components";

export const ToggleCircle = styled.div<{ radius: number }>`
  position: relative;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin: 50px auto;
`;

export const PointsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
`;
