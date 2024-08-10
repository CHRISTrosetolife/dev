import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
export function list_adder_unique(lambda) {
  let included = new Set();
  let result = [];
  lambda((item) => {
    if (!included.has(item)) {
      list_add(result, item);
      included.add(item);
    }
  });
  return result;
}
