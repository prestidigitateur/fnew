import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Home from ".";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });
  test("renders hello world", () => {
    const title = screen.getByText("Hello World!");
    expect(title).toBeDefined();
  });
});
