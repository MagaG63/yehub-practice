import { useSpecializationsFilter } from "../model/useSpecializationsFilter";
import ContainerItem from "../../../shared/ui/ContainerItem/ContainerItem";

export default function SpecializationsFilter() {
  const {
    specializations,
    selectedId,
    isLoading,
    error,
    showAll,
    hasMore,
    toggleSpecialization,
    toggleShowAll,
  } = useSpecializationsFilter();

  if (isLoading) {
    return <div>Загрузка специализаций...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Ошибка загрузки специализаций</div>;
  }

  return (
    <>
      {specializations.map((item) => (
        <ContainerItem
          key={item.id}
          id={item.id}
          title={item.title}
          active={selectedId === item.id}
          onToggle={toggleSpecialization}
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