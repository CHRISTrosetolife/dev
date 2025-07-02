import { html_hash_set } from "./html_hash_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_hash_unparse } from "./html_hash_unparse.mjs";
export function html_hash_set_lookup(lookup) {
  let joined = html_hash_unparse(lookup);
  let h = string_combine_multiple(["#", joined]);
  html_hash_set(h);
}
