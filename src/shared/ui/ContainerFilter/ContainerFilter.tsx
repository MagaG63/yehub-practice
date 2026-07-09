import style from "./ContainerFilter.module.css";

export default function ContainerFilter({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <p className={style.title}>{text}</p>
      <div className={style.list}>{children}</div>
    </div>
  );
}
