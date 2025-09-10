import { useEffect, useRef, useState } from "react";
import * as S from "./YearTicker.styled";
import { YearTickerProps } from "./YearTicker.types";

/**
 * Компонент отображает год. При получении нового значения перебирает промежуточные значения.
 *
 * @param year Любое число
 * @param color Синий или красный вариант
 *
 */
export const YearTicker = ({ year, color }: YearTickerProps) => {
  /** Время работы анимации */
  const duration = 300;
  /** Отображаемый в данный момент год */
  const [displayYear, setDisplayYear] = useState(year);
  /** Начальное значение года от параметров*/
  const startYearRef = useRef(year);
  /** Счетчик времени */
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    /** Начальный год анимаци теперь — отображаемое число*/
    const startYear = displayYear;
    /** Финальный год анимаци теперь — число из пареметров*/
    const endYear = year;
    /** Разница между годами */
    const diff = endYear - startYear;
    /** Если разницы нет, ничего не делаем */
    if (diff === 0) return;
    /** Обновляем начальный год анимации */
    startYearRef.current = startYear;
    /** Срасываем счётчик времени */
    startTimeRef.current = null;

    /** Один "шаг" переключения года */
    const step = (timestamp: number) => {
      /** При первом запуске фиксируем момент старта анимации */
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      /** Показатель прогресса переключения от 0 до 1 */
      const progress = Math.min(
        (timestamp - startTimeRef.current) / duration,
        1
      );
      /** Текущее значение вычесленное как `стартовый год + (разница * прогресс)` */
      const currentValue = Math.round(startYear + diff * progress);

      /** Устанавливаем новое значение для отображения */
      setDisplayYear(currentValue);

      /** Если переключение еще не закончилось, повторяем  */
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [year, duration]);

  return <S.Year color={color}>{displayYear}</S.Year>;
};
