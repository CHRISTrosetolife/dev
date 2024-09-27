import { list_is } from "./list_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
export function list_denest(list) {
  list_adder((la) => {
    each(list, (item) => {
      if (list_is(item)) {
      }
      la(item);
    });
  });
}
