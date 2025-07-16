import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
import { string_prefix_and } from "./string_prefix_and.mjs";
export function prayers_religions() {
  let v = prayers_list_generic_5(
    [
      "Jews",
      "descendants of Abraham",
      "Muslims",
      "Hindus",
      "Buddhists",
      "Agnostics",
      "Atheists",
      "Taoists",
      "Confucians",
      "Indigenous worshippers",
      "Sikh(s)",
      "Baháʼí(s)",
    ],
    prayers_sabbw,
    string_prefix_and,
  );
  return v;
}
