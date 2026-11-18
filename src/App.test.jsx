import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { StudentProvider } from "./context/StudentContext.jsx";

const setup = () => {
  window.location.hash = "#/";
  render(
    <HashRouter>
      <StudentProvider>
        <App />
      </StudentProvider>
    </HashRouter>
  );
  return userEvent.setup();
};

describe("Favourite Student List", () => {
  it("shows the empty message when there are no favourites", async () => {
    const user = setup();
    await user.click(screen.getByRole("link", { name: /favourites/i }));
    expect(screen.getByText("No favourite students added yet")).toBeTruthy();
  });

  it("adds a student, blocks duplicates, and removes them", async () => {
    const user = setup();

    // Add Aarav from the list page
    const aarav = screen.getByText("Aarav Sharma").closest("li");
    await user.click(within(aarav).getByRole("button"));
    expect(within(aarav).getByRole("button").disabled).toBe(true); // duplicate blocked

    // Navigate (no reload) to favourites; the student is there via context
    await user.click(screen.getByRole("link", { name: /favourites/i }));
    expect(screen.getByText("Aarav Sharma")).toBeTruthy();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);

    // Remove -> empty message returns
    await user.click(screen.getByRole("button", { name: /remove/i }));
    expect(screen.getByText("No favourite students added yet")).toBeTruthy();
  });

  it("falls back to home for unknown routes (no blank page)", () => {
    window.location.hash = "#/does-not-exist";
    render(
      <HashRouter>
        <StudentProvider>
          <App />
        </StudentProvider>
      </HashRouter>
    );
    expect(screen.getByText("All Students")).toBeTruthy();
  });
});
