import { list_index_next } from "./list_index_next.mjs";
import { list_next } from "./list_next.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
export async function js_dollar_grandparent_next(v, lambda) {
  let { parent } = v;
  let { stack } = v;
  let s1 = list_get_end_1(stack);
  if (list_is(s1)) {
    let item_index_next = list_index_next(list, item);
    let item_next = list_next(s1, parent);
    await lambda({
      next,
      s1,
    });
  }
  return s1;
}
