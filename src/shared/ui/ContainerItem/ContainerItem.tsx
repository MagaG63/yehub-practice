import style from "./ContainerItem.module.css";

type Props = {
  id: number | string | number[];
  title: string;
  img?: string;
  active?: boolean;
  onToggle?: (id: number | string | number[]) => void;
};

export default function ContainerItem({
  id,
  title,
  img,
  active,
  onToggle,
}: Props) {
  return (
    <div className={`${style.container} ${active ? style.active : ""}`}>
      {img && <img src={img} alt="" />}
      {onToggle ? (
        <button className={style.item} onClick={() => onToggle(id)}>
          {title}
        </button>
      ) : (
        <p className={style.item}>{title}</p>
      )}
    </div>
  );
}
