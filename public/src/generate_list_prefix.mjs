import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function generate_list_prefix(prefix) {
  prefix = string_combine_multiple([prefix, "_"]);
}
