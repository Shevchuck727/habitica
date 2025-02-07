import { render, screen } from "@testing-library/react";
import List from "./List";

test("Рендер списку із завданнями", () => {
    const mockTasks = [
        { id: "1", text: "Завдання 1", completed: false },
        { id: "2", text: "Завдання 2", completed: true }
    ];
    render(<List tasks={mockTasks} />);
    expect(screen.getByText("Завдання 1")).toBeInTheDocument();
    expect(screen.getByText("Завдання 2")).toBeInTheDocument();
});