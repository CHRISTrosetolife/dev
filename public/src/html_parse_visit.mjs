import { object_property_get_or } from "./object_property_get_or.mjs";
import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  visit(
    root,
    (n) => {
      let property_name = "children";
      let default_value = [];
      let result = object_property_get_or(n, property_name, default_value);
      return result;
    },
    tautology,
    lambda,
    [],
  );
}
