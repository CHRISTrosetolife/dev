import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_countries() {
  let v = list_map(countries_names(), function (a) {
    let v2 = string_combine_multiple(["Save and bless ", a]);
    return v2;
  });
  return v;
}
