import { list_adder } from "./list_adder.mjs";
import { function_search } from "./function_search.mjs";
import { object_properties } from "./object_properties.mjs";
export async function search_open(query) {
  let results = await function_search(query);
  let properties = object_properties();
  list_adder((la) => {});
}
