import { render, screen } from "@testing-library/react";
import App from "./App";

test("Рендер головного додатку", () => {
    render(<App />);
    expect(screen.getByText("Ваші завдання")).toBeInTheDocument();
});