import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function list_adder_unique(lambda) {
  let included = new WeakMap();
  let result = [];
  lambda((item) => {
    if (!list_includes(result, item)) {
      list_add(result, item);
    }
  });
  return result;
}
