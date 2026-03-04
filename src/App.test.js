import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("користувач може ввести числа і отримати суму", () => {
  render(<App />);

  const input1 = screen.getByPlaceholderText("Введіть перше число");
  const input2 = screen.getByPlaceholderText("Введіть друге число");
  const button = screen.getByText("Обчислити суму");

  fireEvent.change(input1, { target: { value: "3" } });
  fireEvent.change(input2, { target: { value: "7" } });

  fireEvent.click(button);

  expect(screen.getByText("Сума: 10")).toBeInTheDocument();
});