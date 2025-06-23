import { prayers_list_generic_5 } from "./prayers_list_generic_5.mjs";
import { prayers_sabbw } from "./prayers_sabbw.mjs";
import { string_split_comma_space_reverse } from "./string_split_comma_space_reverse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { countries_names } from "./countries_names.mjs";
import { list_map } from "./list_map.mjs";
export function prayers_countries() {
  let c = countries_names();
  let m = list_map(c, string_split_comma_space_reverse);
  let on_first = function (item) {
    let v = prayers_sabbw(string_combine_multiple(["the people of ", item]));
    return v;
  };
  function on_last(item) {
    let v3 = string_combine_multiple([
      item,
      " and their offspring and ancestors and according to Your desire may they all love perfectly and may the gospel be fully preached to each of these nations now",
    ]);
    return v3;
  }
  let v4 = prayers_list_generic_5(m, on_first, on_last);
  return v4;
}
