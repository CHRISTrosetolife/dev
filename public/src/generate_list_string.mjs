import { json_to } from "./json_to.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { list_map } from "./list_map.mjs";
export async function generate_list_string(list, name) {
  let delimited = list_map(list, json_to);
  await generate_list_generic(delimited, name);
}
