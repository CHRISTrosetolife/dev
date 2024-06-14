import { add } from "./add.mjs";
import { list_adder } from "./list_adder.mjs";
export function range_generic(count, offset) {
  return list_adder((la) => {
    for (let i = 0; i < count; i++) {
      la(add(i, offset));
    }
  });
}
