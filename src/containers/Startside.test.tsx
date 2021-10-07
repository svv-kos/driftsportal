import { render, screen } from "@testing-library/react";
import { Startside } from "./Startside";

describe("Startside", () => {
  it("viser lenker", () => {
    render(<Startside />);
    const lenker = screen.getAllByRole("link");
    expect(lenker.length).toBeGreaterThanOrEqual(1);
  });
});
