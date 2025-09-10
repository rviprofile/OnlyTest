import * as S from "./ToggleDot.styled";
import { ToggleDotProps } from "./ToggleDot.types";

export const ToggleDot = (props: ToggleDotProps) => {
  return (
    <S.DotHoverBox
      isChosen={props.isChosen}
      coords={props.coords}
      counterRotation={props.counterRotation}
      onClick={props.onClick}
      text={props.text}
    >
      <S.Dot>
        <p className="content">{props.text}</p>
      </S.Dot>
    </S.DotHoverBox>
  );
};
