/* Strings Matcher

- toBe()
- toEqual()

- toMatch()

 */

test("string", function () {
  const str = "String";

  expect(str).toBe("String");
  expect(str).toEqual("String");
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
