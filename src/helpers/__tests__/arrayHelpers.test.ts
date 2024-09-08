import { splitArray } from "../";

test("Test splitArray method", () => {
  const [firstPart, secondPart] = splitArray([1, 33, 3, 10, 11, 15], 2);

  expect(firstPart).toEqual([1, 33]);
  expect(secondPart).toEqual([3, 10, 11, 15]);
});
