import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./QuestionsButton.module.css";
import Menu from "../../../../shared/assets/close.svg";

type Props = {
  id: number;
};

export default function QuestionsButton({ id }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <div className={style.container}>
      <img
        className={style.img}
        src={Menu}
        alt="Меню"
        onClick={toggle}
        aria-expanded={isOpen}
      />
      {isOpen && (
        <div className={style.menu} onClick={(e) => e.stopPropagation()}>
          <Link to={`/questions/${id}`} onClick={close}>
            <span>Подробнее</span>
          </Link>
        </div>
      )}
    </div>
  );
}