import { string_trim } from "./string_trim.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
export function tokens_simple(input, quote_string, split_string) {
  input = string_trim(input, split_string);
  let tokens = [];
  let current = [];
  let quoted = false;
  let split = string_split_empty(input);
  each(split, function (s) {
    if (s === quote_string) {
      quoted = not(quoted);
    } else if (s === split_string && !quoted) {
      token_next();
    } else {
      list_add(current, s);
    }
  });
  let suffix = string_combine_multiple([
    split_string,
    quote_string,
    quote_string,
  ]);
  if (list_empty_not_is(current) || string_ends_with(input, suffix)) {
    token_next();
  }
  function token_next() {
    let token = list_join_empty(current);
    current = [];
    list_add(tokens, token);
  }
  return tokens;
}
