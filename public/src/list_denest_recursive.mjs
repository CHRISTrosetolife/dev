import { list_is } from "./list_is.mjs";
import { each } from "./each.mjs";
export function list_denest_recursive(list, la) {
  each(list, (item) => {
    if (list_is(item)) {
    }
    la(item);
  });
}
