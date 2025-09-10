export type ToggleDotProps = {
  text: string;
  onClick: () => void;
  isChosen: boolean;
  coords: { x: number; y: number };
  counterRotation: number;
};
