import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setSpecializationId } from "../../../entities/questions/model/questionsSlice";
import { useGetspecializationsQuery } from "../../../entities/specializations/api/specializations";

const INITIAL_VISIBLE = 5;

export function useSpecializationsFilter() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetspecializationsQuery();
  const selectedId = useAppSelector((state) => state.params.specializationId);
  const [showAll, setShowAll] = useState(false);

  const toggleSpecialization = (id: number) => {
    dispatch(setSpecializationId(id));
  };

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const specializations = data?.data ?? [];
  const visible = showAll ? specializations : specializations.slice(0, INITIAL_VISIBLE);
  const hasMore = specializations.length > INITIAL_VISIBLE;

  return {
    specializations: visible,
    allSpecializations: specializations,
    selectedId,
    isLoading,
    error,
    showAll,
    hasMore,
    toggleSpecialization,
    toggleShowAll,
  };
}