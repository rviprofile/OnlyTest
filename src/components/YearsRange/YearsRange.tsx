import { YearTicker } from "../YearTicker/YearTicker";
import * as S from "./YearsRange.styled";

export const YearsRange = ({
  range,
}: {
  range: { start: number; end: number };
}) => {
  return (
    <S.RangeRow>
      <YearTicker year={range.start} color="blue" />
      <YearTicker year={range.end} color="red" />
    </S.RangeRow>
  );
};
