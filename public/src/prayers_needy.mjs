import { string_prefix_and } from "./string_prefix_and.mjs";
import { prayers_bbw } from "./prayers_bbw.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
export function prayers_needy() {
  return prayers_list_generic_5(
    [
      "orphans",
      "children",
      "widows",
      "foreigners",
      "the poor",
      "the hungry",
      "the thirsty",
      "the elderly",
      "prisoners",
      "the sick",
    ],
    prayers_bbw,
    string_prefix_and,
  );
}
