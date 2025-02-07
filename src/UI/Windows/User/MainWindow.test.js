import { render, screen } from "@testing-library/react";
import MainWindow from "./MainWindow";

test("Рендер головного вікна", () => {
    render(<MainWindow />);
    expect(screen.getByText("Ваші завдання"));
});
