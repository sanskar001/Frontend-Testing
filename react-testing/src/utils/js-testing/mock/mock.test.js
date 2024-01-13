/*
There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a "manual mock" to override a module dependency using "jest.mock()".
*/

import { forEach } from "./mock_func";

const mockCallback = jest.fn((value) => value + 50);

test("forEach mock function", () => {
  forEach([0, 1], mockCallback);

  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);

  // The mock function return value of the first call was 42
  // expect(mockCallback.mock.results[0].value).toBe(50);
});

// ----------------------------

// jest.mock("axios")
// function to automatically mock the axios module.
