import { string_delimit } from "./string_delimit.mjs";
import { log } from "./log.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_dev_screen_if_to_block_if_else() {
  return string_combine_multiple([
    "if(0)",
    js_code_statement_call_args(log.name, [string_delimit("zero")]),
    "else ",
    js_code_statement_call_args(log.name, [string_delimit("not zero")]),
  ]);
}
