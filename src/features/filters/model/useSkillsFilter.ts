import { useState } from "react";
import { useGetSkillsQuery } from "../../../entities/skills/api/skillsApi";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { setSkills } from "../../../entities/questions/model/questionsSlice";

const INITIAL_VISIBLE = 5;

export function useSkillsFilter() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetSkillsQuery();
  const selectedSkills = useAppSelector((state) => state.params.skills);
  const [showAll, setShowAll] = useState(false);

  const toggleSkill = (skillId: number) => {
    dispatch(setSkills(skillId));
  };

  const toggleShowAll = () => setShowAll((prev) => !prev);

  const skills = data?.data ?? [];
  const visibleSkills = showAll ? skills : skills.slice(0, INITIAL_VISIBLE);
  const hasMore = skills.length > INITIAL_VISIBLE;

  return {
    skills: visibleSkills,
    allSkills: skills,
    selectedSkills,
    isLoading,
    error,
    showAll,
    hasMore,
    toggleSkill,
    toggleShowAll,
  };
}
