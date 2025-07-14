import { names_male_generic } from "./names_male_generic.mjs";
export async function names_male() {
  let prefix = "";
  let v = await names_male_generic(prefix);
  return v;
}
