import { string_split_multiple } from "./string_split_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_search_terms_match } from "./function_search_terms_match.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_search(query) {
  assert_arguments_length(arguments, 1);
  let terms = string_split_multiple(query);
  let fn_names = await functions_names();
  let matches = list_filter(fn_names, function (fn_name) {
    let v = function_search_terms_match(fn_name, terms);
    return v;
  });
  let v2 = function_names_to_lookup(matches);
  return v2;
}
