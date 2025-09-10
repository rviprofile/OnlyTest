export type Period = {
  /** Название периода или категории. Например, "Кино" или "Наука" */
  name: string;
  /** Год начала периода */
  startYear: number;
  /** Год окончания периода */
  endYear: number;
  /** Список событий относящийся к периоду */
  events: DateEvent[];
};

export type DateEvent = {
  /** Год события */
  year: number;
  /** Описание события */
  description: string;
};
