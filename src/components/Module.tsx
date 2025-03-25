import { useCoursesStore } from "@/providers/CoursesStoreProvider";
import { Module as ModuleType } from "@/types";
import * as React from "react";

interface Props extends ModuleType {
  moduleIndex: number;
  optionName: string;
  sectionTitle: string;
  optionIndex: number;
  disabled: boolean;
}

const Module: React.FunctionComponent<Props> = ({
  name,
  sectionTitle,
  optionIndex,
  moduleIndex,
  optionName,
  disabled,
}) => {
  const { getModuleStatus, setModuleStatus } = useCoursesStore(
    (state) => state
  );
  const isCompleted = getModuleStatus(sectionTitle, optionIndex, moduleIndex);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setModuleStatus(
      sectionTitle,
      optionIndex,
      moduleIndex,
      event.target.checked
    );
  };

  return (
    <input
      type="checkbox"
      onChange={handleChange}
      checked={isCompleted}
      disabled={disabled}
      id={`${optionName}-${name}`}
      className={`btn join-item disabled:cursor-not-allowed rounded-field`}
      aria-label={name}
      style={{ margin: 0 }}
    />
  );
};

export default Module;
