import { render, screen } from "@testing-library/react";
import { Startside } from "./Startside";

interface MockInterface {
  src: string;
  alt: string;
}

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: MockInterface) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    }
);

describe("Startside", () => {
  it("viser lenker", () => {
    render(<Startside />);
    const lenker = screen.getAllByRole("link");
    expect(lenker.length).toBeGreaterThanOrEqual(1);
  });
});
