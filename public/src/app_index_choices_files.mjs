import { app_index_choices_pages } from "./app_index_choices_pages.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
export function app_index_choices_files() {
  let fn_names = app_index_choices_pages();
  return function_names_to_lookup(fn_names);
}
