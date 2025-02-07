import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("Рендер форми входу", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль")).toBeInTheDocument();
});
