import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { string_split_comma_space_reverse } from "./string_split_comma_space_reverse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_countries() {
  let c = countries_names();
  let m = list_map(c, string_split_comma_space_reverse);
  let v = list_map(m, function (a) {
    let v2 = prayers_sabbw(
      string_combine_multiple([
        "the people of ",
        a,
        " and their offspring and may they all love perfectly",
      ]),
    );
    return v2;
  });
  return v;
}
