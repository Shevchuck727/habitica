import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Рендер кнопки", () => {
    render(<Button text="Натисни мене" />);
    expect(screen.getByText("Натисни мене")).toBeInTheDocument();
});

test("Клік по кнопці викликає onClick", () => {
    const handleClick = jest.fn();
    render(<Button text="Клік" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Клік"));
    expect(handleClick).toHaveBeenCalledTimes(1);
});