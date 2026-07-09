import style from "./Tags.module.css";

type Props = {
  title: string;
};

export default function Tags(props: Props) {
  return (
    
    
      <p className={style.title}>#{props.title}</p>
  
  );
}
