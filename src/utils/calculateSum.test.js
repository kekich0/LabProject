import { calculateSum } from "./calculateSum";

describe("calculateSum function", () => {

  test("додає два додатні числа", () => {
    expect(calculateSum(2, 3)).toBe(5);
  });

  test("працює з від’ємними числами", () => {
    expect(calculateSum(-2, -3)).toBe(-5);
  });

  test("додає число та 0", () => {
    expect(calculateSum(5, 0)).toBe(5);
  });

  test("працює з рядками-числами", () => {
    expect(calculateSum("4", "6")).toBe(10);
  });

  test("працює з десятковими числами", () => {
    expect(calculateSum(2.5, 1.5)).toBe(4);
  });

  test("повертає 0 якщо обидва значення порожні", () => {
    expect(calculateSum("", "")).toBe(0);
  });

});