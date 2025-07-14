import { names_male_generic } from "./names_male_generic.mjs";
export async function names_female_generate() {
  let prefix = "fe";
  let v = await names_male_generic(names_female_generate, prefix);
  return v;
}
