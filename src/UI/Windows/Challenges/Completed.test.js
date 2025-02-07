import { render, screen } from "@testing-library/react";
import Completed from "./Completed";

test("Рендер списку завершених завдань", () => {
    render(<Completed />);
    expect(screen.getByText("Завершені завдання"));
});