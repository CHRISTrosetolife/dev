import { list_add } from "./list_add.mjs";
export function counter(lambda) {
  let result = [];
  lambda((item) => list_add(result, item));
  return result;
}
