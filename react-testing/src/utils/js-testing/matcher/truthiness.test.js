/*
- toBeNull() =>  matches only null
- toBeUndefined() =>  matches only undefined
- toBeDefined() => is the opposite of toBeUndefined
- toBeTruthy() => matches anything that an if statement treats as true
- toBeFalsy() => matches anything that an if statement treats as false
*/

test("null", () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).toBeDefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).not.toBeUndefined();
  expect(z).toBeDefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
