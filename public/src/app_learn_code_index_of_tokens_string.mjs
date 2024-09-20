import { string_size } from "./string_size.mjs";
import { string_take } from "./string_take.mjs";
import { add } from "./add.mjs";
import { app_learn_code_index_of_tokens } from "./app_learn_code_index_of_tokens.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
export function app_learn_code_index_of_tokens_string(input, tokens_string) {
  let tokens = string_split_comma(tokens_string);
  let index = app_learn_code_index_of_tokens(input, tokens);
  let take_count = add(index, string_size("".toString()));
  let take = string_take(input, take_count);
  return take;
}
