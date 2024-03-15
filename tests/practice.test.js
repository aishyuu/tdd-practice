import { capitalize, reverseString, shiftCypher } from "../code/practice";
import { Calculator } from "../code/practice";

test("Capitalize 'hello' to 'Hello'", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("Reverse string", () => {
  expect(reverseString("hello there boop")).toEqual("poob ereht olleh");
});

test("Calculator testing", () => {
  const calc = new Calculator();

  expect(calc.add(1, 2)).toBe(3);
  expect(calc.subtract(5, 2)).toBe(3);
  expect(calc.multiply(10, 10)).toBe(100);
  expect(calc.divide(1, 10)).toBeCloseTo(0.1);
});

test("Cypher testing", () => {
  expect(shiftCypher("Beware the Ides of March.", 7)).toBe(
    "ILDHYL AOL PKLZ VM THYJO.".toLowerCase()
  );
});
