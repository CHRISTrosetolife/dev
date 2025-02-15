import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_index_next } from "./list_index_next.mjs";
import { list_is } from "./list_is.mjs";
export async function js_dollar_grandparent(v, lambda) {
  let { parent } = v;
  let { stack } = v;
  let s1 = list_get_end_2(stack);
  if (list_is(s1)) {
    let index = list_index_next(s1, parent);
    await lambda({
      index,
      s1,
    });
  }
  return s1;
}
