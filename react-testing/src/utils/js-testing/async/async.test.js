function fetchData() {
  return Promise.resolve("Peanut Butter");
}

function getData() {
  if (Math.random() > 0.5) {
    return Promise.resolve("Peanut Butter");
  }
  return Promise.reject("Error: Something Went Wrong!");
}

// Promise
test("The data is peanut butter", () => {
  fetchData().then((data) => {
    expect(data).toBe("Peanut Butter");
  });
});

// Async/Await

test("The data is peanut butter with async/await", async () => {
  const data = await fetchData();
  expect(data).toBe("Peanut Butter");
});

// Error Handling

/*
expect.assertions(number) 
verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.
*/

test("The fetch data with error handling", async () => {
  expect.assertions(1);
  try {
    const data = await getData(1);
    expect(data).toBe("Peanut Butter");
  } catch (err) {
    expect(err).toBe("Error: Something Went Wrong!");
  }
});
