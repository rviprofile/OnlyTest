"use client";

import { useState } from "react";
import { EventCard } from "../EventCard/EventCard";
import { Header } from "../Header/Header";
import { ToggleCircle } from "../ToggleCircle/ToggleCircle";
import * as S from "./HistoricalDatesSection.styled";
import { YearsRange } from "../YearsRange/YearsRange";

export const HistoricalDatesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <S.Section>
      <Header text={"Исторические\n даты"} />
      <YearsRange range={{start: 1992, end: 2022}}/>
      <ToggleCircle
        lenght={6}
        onChange={(number) => setActiveIndex(number)}
        activeIndex={activeIndex}
      />
      <EventCard event={{ year: 1992, description: "lorem2-" }} />
    </S.Section>
  );
};
