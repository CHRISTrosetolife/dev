import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
import { string_split } from "./string_split.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function prayers_countries() {
  let c = countries_names();
  let m = list_map(c, function (d) {
    let s = string_split(d, ", ");
    list_reverse(s);
    let v3 = s;
    return v3;
  });
  let v = list_map(m, function (a) {
    let v2 = string_combine_multiple(["Save and bless ", a]);
    return v2;
  });
  return v;
}
