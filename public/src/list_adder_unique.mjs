import { list_add } from "./list_add.mjs";
export function list_adder_unique(lambda) {
  let included = new WeakMap();
  let result = [];
  lambda((item) => {
    if (!included.has(item)) {
      list_add(result, item);
      included.set(item, true);
    }
  });
  return result;
}
