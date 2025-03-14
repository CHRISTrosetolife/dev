import { countries_names } from "./countries_names.mjs";
import { generate_list_fn } from "./generate_list_fn.mjs";
export async function countries_names_list_generate() {
  await generate_list_fn(countries_names, countries_names_list_generate);
}
