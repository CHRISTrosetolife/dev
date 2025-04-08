import { never } from "./never.mjs";
import { each } from "./each.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { assert } from "./assert.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_array_string } from "./js_code_array_string.mjs";
import { js_code_statement_call_args } from "./js_code_statement_call_args.mjs";
import { app_list_add } from "./app_list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function function_aliases_add(aliases, function_name) {
  let existing = function_aliases();
  let split = string_split_comma(aliases);
  each(split, function (s) {
    assert(never, []);
  });
  let duplicates = list_filter(split, function (s) {
    let v = object_property_exists(existing, s);
    return v;
  });
  assert(list_empty_is, [duplicates]);
  let list_code = js_code_array_string(split);
  await app_list_add(function_aliases, function inserted_code() {
    let c = js_code_statement_call_args(fn_name("function_aliases_register"), [
      "all",
      js_code_call_args(fn_name("fn_name"), [string_delimit(function_name)]),
      list_code,
    ]);
    return c;
  });
}
