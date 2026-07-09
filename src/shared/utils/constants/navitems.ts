export interface TNavItem {
  id: string;
  label: string;
}

const NAVITEMS: TNavItem[] = [
  { id: "questions", label: "База вопросов" },
  { id: "simulator", label: "Тренажер" },
  { id: "materials", label: "Материалы" },
  { id: "HH", label: "Навыки (hh)" },
];

export default NAVITEMS;