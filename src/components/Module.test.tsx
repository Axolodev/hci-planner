import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CoursesStoreProvider } from "../providers/CoursesStoreProvider";
import Module, { TESTING_ID } from "./Module";
import { basicPlan } from "../testUtils/plans";

describe("Module", () => {
  it.skip("renders correctly and matches snapshot", () => {
    const { container } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <Module
          sectionTitle="Section title"
          optionIndex={0}
          moduleIndex={0}
          optionName="Option name"
          disabled={false}
        />
      </CoursesStoreProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("can be checked", async () => {
    const { getByTestId } = render(
      <CoursesStoreProvider plan={basicPlan}>
        <Module
          optionIndex={0}
          moduleIndex={0}
          optionName="Option name"
          disabled={false}
          sectionTitle="Section title"
        />
      </CoursesStoreProvider>
    );
    const checkbox = getByTestId(TESTING_ID) as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
