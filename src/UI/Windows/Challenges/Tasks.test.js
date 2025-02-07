import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";

test("Рендер компонента завдань", () => {
    render(<Tasks />);
    expect(screen.getByText("Додати"));
});