import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
export function range_generic(count, offset) {
  let result = [];
  for (let i = 0; i < count; i++) {
    list_add(result, add(i, offset));
  }
  return result;
}
