import { useSkillsFilter } from "../model/useSkillsFilter";
import ContainerItem from "../../../shared/ui/ContainerItem/ContainerItem";

export default function SkillsFilter() {
  const {
    skills,
    selectedSkills,
    isLoading,
    error,
    showAll,
    hasMore,
    toggleSkill,
    toggleShowAll,
  } = useSkillsFilter();

  if (isLoading) {
    return <div>Загрузка навыков...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Ошибка загрузки навыков</div>;
  }

  return (
    <>
      {skills.map((item) => (
        <ContainerItem
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.imageSrc}
          active={selectedSkills[0] === item.id}
          onToggle={toggleSkill}
        />
      ))}

      {hasMore && (
        <button onClick={toggleShowAll} style={{ color: "blue" }}>
          {showAll ? "Скрыть" : "Показать все"}
        </button>
      )}
    </>
  );
}
