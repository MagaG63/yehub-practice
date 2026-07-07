import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../../../../shared/assets/close.svg";
import style from "./QuestionsButton.module.css";

export default function QuestionsButton({ id }: { id: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={Menu}
        alt="Меню"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <div className={style.menu} onClick={(e) => e.stopPropagation()}>
          <Link to={`questions/${id}`} onClick={() => setIsOpen(false)}>
            <span style={{ color: "darkblue" }}>Подробнее</span>
          </Link>
        </div>
      )}
    </div>
  );
}
