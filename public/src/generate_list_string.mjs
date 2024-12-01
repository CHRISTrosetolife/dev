import { generate_list_generic } from "./generate_list_generic.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
export async function generate_list_string(list, name) {
  let delimited = list_map(list, string_delimit);
  await generate_list_generic(name, delimited);
}
