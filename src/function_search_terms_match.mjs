import {function_name_to_parts} from './function_name_to_parts.mjs';
import {list_includes_multiple} from './list_includes_multiple.mjs';
export function function_search_terms_match(function_name, terms) {
  let fn_name_parts = function_name_to_parts(function_name);
  return list_includes_multiple(fn_name_parts, terms);
}
