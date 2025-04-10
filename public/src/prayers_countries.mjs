import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
import { string_split } from "./string_split.mjs";
export function prayers_countries() {
  let c = countries_names();
  let m = list_map(c, function () {
    let s = string_split(c, ",");
  });
  let v = list_map(c, function (a) {
    let v2 = string_combine_multiple(["Save and bless ", a]);
    return v2;
  });
  return v;
}
