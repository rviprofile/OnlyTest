"use client";

import { useEffect, useRef, useState } from "react";
import { ToggleDot } from "./components/ToggleDot/ToggleDot";
import * as S from "./ToggleCircle.styled";
import gsap from "gsap";

export const ToggleCircle = ({
  lenght = 6,
  activeIndex,
  onChange,
}: {
  lenght: number;
  activeIndex: number;
  onChange: (number: number) => void;
}) => {
  const [clientReady, setClientReady] = useState(false);
  /** Ссылка на вращающийся контейнер */
  const containerRef = useRef<HTMLDivElement>(null);
  /** Состояние с углом поворота в данный момент */
  const [rotation, setRotation] = useState(0);
  /** Количество точек на круге */
  const pointsCount = lenght;
  /** Радиус круга в пикселях*/
  const radius = 530 / 2;
  /** Инициализация первого поворота */
  useEffect(() => {
    handleClick(activeIndex);
  }, [clientReady, activeIndex, pointsCount]);
  /** Функция при клике на точку */
  const handleClick = (index: number) => {
    /** Вызов родительской функции */
    onChange(index);
    /** Шаг прокрутки круга */
    const angleStep = 360 / pointsCount;
    /** Верхний правый угол круга как цель */
    const targetAngle = -60;
    /** Поврот круга в градусах */
    const newRotation = targetAngle - index * angleStep;
    /** Установка нового значения поворота */
    setRotation(targetAngle - index * angleStep);
    /** Плавная анимация для всего действия */
    gsap.to(containerRef.current, {
      rotation: newRotation,
      duration: 1,
      ease: "power3.inOut",
    });
  };
  useEffect(() => {
    setClientReady(true); // теперь все вычисления делаем только на клиенте
  }, []);
  if (!clientReady) return <S.ToggleCircle radius={radius} />; // заглушка на сервере
  return (
    <S.ToggleCircle radius={radius}>
      <S.PointsContainer ref={containerRef}>
        {Array.from({ length: pointsCount }).map((_, i) => {
          /** Угол поворота по кругу для этой точки */
          const angle = (i * 2 * Math.PI) / pointsCount;
          /** Координаты этой точки */
          const x = radius + Math.cos(angle) * radius;
          const y = radius + Math.sin(angle) * radius;

          return (
            <ToggleDot
              key={i}
              onClick={() => handleClick(i)}
              isChosen={activeIndex === i}
              text={`${i + 1}`}
              coords={{ x, y }}
              counterRotation={-rotation}
            />
          );
        })}
      </S.PointsContainer>
    </S.ToggleCircle>
  );
};
