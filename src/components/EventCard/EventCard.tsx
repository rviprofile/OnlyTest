import { DateEvent } from "../HistoricalВatesSection/HistoricalDatesSection.types";
import * as S from "./EventCard.styled";

export const EventCard = ({ event }: { event: DateEvent }) => {
  return (
    <S.Card>
      <S.CardYear>{event.year}</S.CardYear>
      <S.CardDescription>{event.description}</S.CardDescription>
    </S.Card>
  );
};
