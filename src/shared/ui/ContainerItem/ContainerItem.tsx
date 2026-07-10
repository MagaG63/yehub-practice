import style from "./ContainerItem.module.css";

type Props<T = number | string | number[]> = {
  id: T;
  title: string;
  img?: string;
  active?: boolean;
  onToggle?: (id: T) => void;
};

export default function ContainerItem<T extends number | string | number[]>({
  id,
  title,
  img,
  active,
  onToggle,
}: Props<T>) {
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
