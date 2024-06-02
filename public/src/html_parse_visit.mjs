import { object_property_get_or } from "./object_property_get_or.mjs";
import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  visit(
    root,
    (n) => {
      let result = object_property_get_or(n, "children", []);
      return result;
    },
    tautology,
    lambda,
    [],
  );
}
