import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/*
Test Driven Development

1. Write test for code which is not written yet, which ofcourse gonna be => Failed 
2. Then create code.
3. Refactor code.

TDD: Red to Green test  => Red (Failed) to Green (Success)
*/

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);

    const helloText = screen.getByText(/hello/i);
    expect(helloText).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("render with name props", () => {
      render(<Greet name="Jhon" />);

      const textElement = screen.getByText("Hello Jhon");
      expect(textElement).toBeInTheDocument();
    });
  });
});

/*
Filtering tests

1. test.only() => test runner only run that test, skip other.
2. test.skip() => test runner skip that test

Similary for grouping

1. describe.only()
2. describe.skip()
*/
