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
    <div key={name} className="flex items-center gap-2">
      <input
        type="checkbox"
        id={optionName + name}
        onChange={handleChange}
        checked={isCompleted}
        disabled={disabled}
        className={`checkbox disabled:cursor-not-allowed text-base-content`}
      />
      <label
        htmlFor={optionName + name}
        className={`transition-colors ${
          disabled
            ? "text-base-content/50 cursor-not-allowed"
            : "text-base-content select-none"
        }`}
      >
        {name}
      </label>
    </div>
  );
};

export default Module;
