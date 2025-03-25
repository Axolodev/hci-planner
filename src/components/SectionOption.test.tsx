import React from "react";
import { render } from "@testing-library/react";
import { CoursesStoreProvider } from "../providers/CoursesStoreProvider";
import { basicPlan, planWithMultipleSectionOptions } from "../testUtils/plans";
import { TESTING_ID as MODULE_TESTING_ID } from "./Module";
import SectionOption, {
  TESTING_ID_PREFIX as SECTION_OPTION_TESTING_ID_PREFIX,
} from "./SectionOption";
import userEvent from "@testing-library/user-event";

describe("SectionOption", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <SectionOption
          option={basicPlan.sections[0].options[0]}
          sectionTitle="Section title"
          optionIndex={0}
        />
      </CoursesStoreProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("can check modules within a sectionOption", async () => {
    const { getByTestId } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <SectionOption
          option={basicPlan.sections[0].options[0]}
          sectionTitle="Section title"
          optionIndex={0}
        />
      </CoursesStoreProvider>
    );
    const checkbox = getByTestId(MODULE_TESTING_ID) as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it("should disable sectionOption when another is selected", async () => {
    const { getByTestId } = render(
      <CoursesStoreProvider plan={planWithMultipleSectionOptions}>
        <SectionOption
          option={planWithMultipleSectionOptions.sections[0].options[0]}
          sectionTitle="Section title"
          optionIndex={0}
        />
        <SectionOption
          option={planWithMultipleSectionOptions.sections[0].options[1]}
          sectionTitle="Section title"
          optionIndex={1}
        />
      </CoursesStoreProvider>
    );
    const firstCheckbox = getByTestId(
      `${SECTION_OPTION_TESTING_ID_PREFIX}0`
    ).querySelector("input") as HTMLInputElement;
    const secondCheckbox = getByTestId(
      `${SECTION_OPTION_TESTING_ID_PREFIX}1`
    ).querySelector("input") as HTMLInputElement;
    expect(firstCheckbox.disabled).toBe(false);
    expect(secondCheckbox.disabled).toBe(false);
    await userEvent.click(firstCheckbox);
    expect(firstCheckbox.disabled).toBe(false);
    expect(secondCheckbox.disabled).toBe(true);
  });
});
