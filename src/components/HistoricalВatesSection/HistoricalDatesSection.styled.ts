import styled from "styled-components";

export const Section = styled.section`
  border: 1px #c8cacfff solid;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
        to right,
        transparent 49.9%,
        #c8cacfff 50%,
        transparent 50.1%
      )
      center/100% 100% no-repeat,
    linear-gradient(
        to bottom,
        transparent 49.9%,
        #c8cacfff 50%,
        transparent 50.1%
      )
      center calc(50% - 120px) / 100% 100% no-repeat;
`;
