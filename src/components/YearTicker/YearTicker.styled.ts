import styled from "styled-components";

export const Year = styled.p<{ color: "blue" | "red" }>`
  color: ${(props) => (props.color === "blue" ? "#5D5EEF" : "#EF5DA8")};
  font-family: var(--font-pt-sans);
  font-weight: 700;
  font-size: 150px;
`;
