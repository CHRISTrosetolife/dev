import { list_set } from "./list_set.mjs";
import { list_index } from "./list_index.mjs";
import { js_code_if } from "./js_code_if.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
export function js_dollar_if_block(v, condition) {
  let { parent } = v;
  let { stack } = v;
  let s1 = list_get_end_1(stack);
  if (list_is(s1)) {
    let statement = js_parse_first(js_code_if(condition));
    let index = list_index(s1, parent);
    list_set(s1, index, statement);
  }
}
