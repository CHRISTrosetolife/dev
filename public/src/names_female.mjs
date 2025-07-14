import { names_male_generate } from "./names_male_generate.mjs";
import { generate_list_string_generated } from "./generate_list_string_generated.mjs";
import { names_male_generic } from "./names_male_generic.mjs";
export async function names_female() {
  let prefix = "fe";
  let list = await names_male_generic(prefix);
  let v = await generate_list_string_generated(names_male_generate, list);
  return v;
}
