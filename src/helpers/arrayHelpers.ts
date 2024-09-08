import { TAny } from "types";

export function splitArray(arr: TAny[], index: number) {
  const part1 = arr.slice(0, index);
  const part2 = arr.slice(index);

  return [part1, part2];
}

export function addFirstRemoveLast(arr: TAny[], newItem: TAny) {
  const newArr = [...arr];
  newArr.unshift(newItem);

  // Remove the last element
  newArr.pop();

  // Return the modified array as new array
  return newArr;
}
