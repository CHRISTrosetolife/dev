import { string_split_comma_space_reverse } from "./string_split_comma_space_reverse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_countries() {
  let c = countries_names();
  let m = list_map(c, string_split_comma_space_reverse);
  let v = list_map(m, function (a) {
    let v2 = string_combine_multiple([
      string_combine_multiple(["Save and bless beyond words ", a]),
      " and may the people and their offspring love perfectly",
    ]);
    return v2;
  });
  return v;
}
