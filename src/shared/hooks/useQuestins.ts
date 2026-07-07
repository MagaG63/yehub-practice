import { useState } from "react";

export default function useQuestins() {
  const [isActive, setIsActive] = useState(false);

  const toogleActive = () => {
    setIsActive(!isActive);
  };

  return { isActive, toogleActive };
}
