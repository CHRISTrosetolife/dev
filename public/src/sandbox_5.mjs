import { countries_names } from "./countries_names.mjs";
import { generate_list_string } from "./generate_list_string.mjs";
export async function sandbox_5() {
  await generate_list_string(countries_names(), "countries_names_list");
}
