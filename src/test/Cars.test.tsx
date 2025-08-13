import Cars from "../pages/Cars";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Cars fetch", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch and display cars data", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: () => Promise.resolve({}),
      })
    );
  });

  render(<Cars />);

  expect(screen.getByText).toBeInThe;
});
