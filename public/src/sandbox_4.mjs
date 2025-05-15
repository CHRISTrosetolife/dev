import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
import { each } from "./each.mjs";
export async function sandbox_4() {
  each(keyboard_keys_sorted(), function (letter) {
    let url = string_combine_multiple([
      "https://www.catholic-hierarchy.org/bishop/la",
      letter,
      ".html",
    ]);
  });
}
