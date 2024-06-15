import { list_add } from "./list_add.mjs";
export function list_adder_multiple(count, lambda) {
  let result = [];
  lambda((item) => list_add(result, item));
  return result;
}
