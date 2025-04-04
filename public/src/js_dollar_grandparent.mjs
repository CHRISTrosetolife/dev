import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_index_next } from "./list_index_next.mjs";
import { list_is } from "./list_is.mjs";
export async function js_dollar_grandparent(v, lambda) {
  let { parent } = v;
  let { stack } = v;
  let s2 = list_get_end_2(stack);
  if (list_is(s2)) {
    let index = list_index_next(s2, parent);
    await lambda({
      index,
      s2,
    });
  }
  return s2;
}
