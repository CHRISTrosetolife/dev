import { list_get } from "./list_get.mjs";
import { add_1 } from "./add_1.mjs";
import { each_index } from "./each_index.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_trim } from "./string_trim.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { string_replace } from "./string_replace.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function tokens_simple(input, quote_string, split_string) {
  input = string_trim(input, split_string);
  let q2 = string_combine(quote_string, quote_string);
  input = string_replace(input, quote_string, q2);
  let q4 = string_combine(q2, q2);
  input = string_replace(input, q4, quote_string);
  let tokens = [];
  let token = [];
  let quoted = false;
  let split = string_split_empty(input);
  each_index(split, function (current, index) {
    let i1 = add_1(index);
    if (list_index_is(split, i1)) {
      let next = list_get(split, i1);
      let cn = string_combine(current, next);
      if (cn === q2) {
        quoted = not(quoted);
        return;
      }
    }
    if (current === split_string && !quoted) {
      token_next();
      return;
    }
    list_add(current, current);
  });
  let suffix = string_combine_multiple([split_string, q4]);
  if (list_empty_not_is(token) || string_ends_with(input, suffix)) {
    token_next();
  }
  function token_next() {
    let joined = list_join_empty(token);
    token = [];
    list_add(tokens, joined);
  }
  return tokens;
}
