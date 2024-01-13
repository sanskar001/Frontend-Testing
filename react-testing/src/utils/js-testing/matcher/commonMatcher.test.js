import { sum } from "../sum/sum";

/*
Common Matcher

- toBe()
- toEqual()
- toStrictEqual()

*/

// Using Matcher "expect"

// 1. toBe - uses Object.is to test exact equality.

test("two plus two is four", function () {
  const result = sum(2, 2);
  expect(result).toBe(4);
});

/* 2. toEqual
  - If you want to check the value of an object, use toEqual
  -toEqual recursively checks every field of an object or array.
  */

test("object asssignment", function () {
  const data = { name: "Flaming Sizzler" };
  data["price"] = 899;
  expect(data).toEqual({ name: "Flaming Sizzler", price: 899 });
});

// ----------

test("object initialization", function () {
  class Pizza {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const newPizza = new Pizza("Flaming Sizzler", 899);
  expect(newPizza).toEqual({ name: "Flaming Sizzler", price: 899 });
});

// -------------

/* 3. toStrictEqual
  - There are two different data types. class Pizza is a custom object, whereas our toEqual is expecting an object litera
  - One more thing with toEqual is that it doesn’t take undefined values
  */

test("object initialization with toStrictEqual", function () {
  class Pizza {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const newPizza = new Pizza("Flaming Sizzler", 899);
  //   expect(newPizza).toStrictEqual({ name: "Flaming Sizzler", price: 899 });
  expect(newPizza).not.toStrictEqual({ name: "Flaming Sizzler", price: 899 });
});

test("undefined value check in object", () => {
  const pizza = {
    promo: undefined,
    name: "Flaming Sizzler",
    price: 899,
  };

  // ✅ PASS
  expect(pizza).toEqual({
    name: "Flaming Sizzler",
    price: 899,
  });

  // ❌ FAIL
  expect(pizza).not.toStrictEqual({
    name: "Flaming Sizzler",
    price: 899,
  });
});
