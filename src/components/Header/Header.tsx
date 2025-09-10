"use client";

import React from "react";
import * as S from "./Header.styled";

/** Заголовок страницы или блока */
export const Header = ({ text }: { text: string }) => {
  return (
    <S.ColoredBorderBox>
      <S.ColoredBorder />
      <h1>
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </S.ColoredBorderBox>
  );
};
