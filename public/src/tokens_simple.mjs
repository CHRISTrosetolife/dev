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
import { subtract_1 } from "./subtract_1.mjs";
export function tokens_simple(input, quote_string, split_string) {
  input = string_trim(input, split_string);
  let q2 = string_combine(quote_string, quote_string);
  input = string_replace(input, quote_string, q2);
  let q4 = string_combine(q2, q2);
  input = string_replace(input, q4, quote_string);
  let tokens = [];
  let token_buffer = [];
  let quoted = false;
  let split = string_split_empty(input);
  each_index(split, function (current, index) {
    if (lambda(add_1)) {
      quoted = not(quoted);
      return;
    }
    let index_before = subtract_1(index);
    if (list_index_is(split, index_before)) {
      let before = list_get(split, index_before);
      let cn = string_combine(before, current);
      if (cn === q2) {
        return;
      }
    }
    if (current === split_string && !quoted) {
      token_next();
      return;
    }
    list_add(token_buffer, current);
    function lambda(change) {
      let index_changed = change(index);
      if (list_index_is(split, index_changed)) {
        let other = list_get(split, index_changed);
        let cn = string_combine(current, other);
        if (cn === q2) {
          return true;
        }
      }
      return false;
    }
  });
  let suffix = string_combine_multiple([split_string, q4]);
  if (list_empty_not_is(token_buffer) || string_ends_with(input, suffix)) {
    token_next();
  }
  function token_next() {
    let token = list_join_empty(token_buffer);
    token_buffer = [];
    list_add(tokens, token);
  }
  return tokens;
}
