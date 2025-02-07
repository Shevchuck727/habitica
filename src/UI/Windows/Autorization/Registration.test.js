import { render, screen } from "@testing-library/react";
import Registration from "./Registration";

test("Рендер форми реєстрації", () => {
    render(<Registration />);
    expect(screen.getByPlaceholderText("Ім'я")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль")).toBeInTheDocument();
});