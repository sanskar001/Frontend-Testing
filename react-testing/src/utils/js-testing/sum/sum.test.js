import { sum } from "./sum";

// test(test-identifier, callback function in which test written);

test("add 1 + 2 equals to 3", function () {
  expect(sum(1, 2)).toBe(3);
});
