import React from "react";
import { render } from "@testing-library/react";
import { CoursesStoreProvider } from "../providers/CoursesStoreProvider";
import { TESTING_ID as MODULE_TESTING_ID } from "./Module";
import Section, { INDICATOR_TESTING_ID } from "./Section";
import { basicPlan, planWithMultipleSectionOptions } from "../testUtils/plans";
import { TESTING_ID_PREFIX as SECTION_OPTION_TESTING_ID_PREFIX } from "./SectionOption";
import userEvent from "@testing-library/user-event";

describe("Section", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <Section section={basicPlan.sections[0]} />
      </CoursesStoreProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("can check modules within a section, and shows an indicator when section is finished", async () => {
    const { getByTestId } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <Section section={basicPlan.sections[0]} />
      </CoursesStoreProvider>
    );
    const checkbox = getByTestId(MODULE_TESTING_ID) as HTMLInputElement;
    const indicator = getByTestId(INDICATOR_TESTING_ID);

    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    expect(indicator.classList.contains("swap-active")).toBe(true);
  });

  it("should complete section when modules in a single sectionOption are completed", async () => {
    const { getByTestId } = render(
      <CoursesStoreProvider plan={planWithMultipleSectionOptions}>
        <Section section={planWithMultipleSectionOptions.sections[0]} />
      </CoursesStoreProvider>
    );

    const checkbox = getByTestId(
      `${SECTION_OPTION_TESTING_ID_PREFIX}0`
    ).querySelector("input") as HTMLInputElement;
    const indicator = getByTestId(INDICATOR_TESTING_ID);

    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    expect(indicator.classList.contains("swap-active")).toBe(true);
  });
});
