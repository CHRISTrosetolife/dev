import { functions_names } from "./functions_names.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_search_terms_match } from "./function_search_terms_match.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function function_search(query) {
  assert_arguments_length(arguments, 1);
  let terms = string_split_comma(query);
  let fn_names = await functions_names();
  let matches = list_filter(fn_names, (fn_name) => {
    return function_search_terms_match(fn_name, terms);
  });
  return function_names_to_lookup(matches);
}
