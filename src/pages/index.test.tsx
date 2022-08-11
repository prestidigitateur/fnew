import { render, screen, fireEvent } from "@testing-library/react";
import { beforeAll, describe, expect, test } from "vitest";
import Home from ".";

describe("Home", () => {
  beforeAll(() => {
    render(<Home />);
  });
  test("renders hello world", () => {
    const title = screen.getByText("Hello World!");
    expect(title).toBeDefined();
  });
  test("reveal hidden content", () => {
    const btn = screen.getByTestId("show-btn");
    fireEvent.click(btn);
    const label = screen.getByText("hidden content");
    expect(label).toBeDefined();
  });
  // test("hide content", () => {
  //   const btn = screen.getByTestId("show-btn");
  //   fireEvent.doubleClick(btn);
  //   // fireEvent.click(btn);
  //   const label = screen.getByText("hidden content");
  //   expect(label).toBeUndefined();
  // });
});
