import { useState } from "react";

export function useQuestionsToggle() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive((prev) => !prev);

  return { isActive, toggle };
}