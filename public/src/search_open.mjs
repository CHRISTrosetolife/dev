import { list_adder } from "./list_adder.mjs";
import { function_search } from "./function_search.mjs";
export async function search_open(query) {
  let results = await function_search(query);
  list_adder((la) => {});
}
