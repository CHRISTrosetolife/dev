import { generate_list_string_generated } from "./generate_list_string_generated.mjs";
import { names_male_generic } from "./names_male_generic.mjs";
export async function names_male_generate() {
  let prefix = "";
  let v = await names_male_generic(names_male_generate, prefix);
  return v;
}
