import { list_sort_size } from "./list_sort_size.mjs";
import { function_open } from "./function_open.mjs";
import { list_first } from "./list_first.mjs";
import { function_search } from "./function_search.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_search_open(query) {
  let results = await function_search(query);
  let properties = object_properties(results);
  list_sort_size(properties);
  let first = list_first(properties);
  await function_open(first);
  return results;
}
