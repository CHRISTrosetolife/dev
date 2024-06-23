import { function_open } from "./function_open.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort } from "./list_sort.mjs";
import { function_search } from "./function_search.mjs";
import { object_properties } from "./object_properties.mjs";
import { string_length } from "./string_length.mjs";
export async function search_open(query) {
  let results = await function_search(query);
  let properties = object_properties(results);
  list_sort(properties, string_length);
  let first = list_first(properties);
  await function_open(first);
  return results;
}
