import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
export function prayers_needy() {
  let v = prayers_list_generic_5(
    ["children", "foreigners", "the elderly", "the innocent accused"],
    prayers_sabbw,
    string_prefix_and,
  );
  return v;
}
