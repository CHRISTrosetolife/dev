import { sermon_overwrite } from "./sermon_overwrite.mjs";
import { sermon_lines } from "./sermon_lines.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { string_digits_is } from "./string_digits_is.mjs";
import { string_first } from "./string_first.mjs";
import { string_replace } from "./string_replace.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
export async function sermon_format(name) {
  let lines = await sermon_lines(name);
  let numbered = list_filter(lines, (line) => {
    if (string_empty_is(line)) {
      return false;
    }
    let first = string_first(line);
    if (string_digits_is(first)) {
      return true;
    }
    return false;
  });
  let mapped = list_map(numbered, (n) => {
    each(keyboard_keys(), (k) => {
      n = string_replace(n, string_combine_multiple(["[", k, "]"]), "");
    });
    return n;
  });
  await sermon_overwrite(name, mapped);
}
