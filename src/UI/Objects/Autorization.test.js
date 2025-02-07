import { render, screen } from "@testing-library/react";
import Autorization from "./Autorization";

test("Рендер сторінки авторизації", () => {
    render(<Autorization />);
    expect(screen.getByText("Увійти")).toBeInTheDocument();
    expect(screen.getByText("Немає аккаунта? Зареєструватися")).toBeInTheDocument();
});