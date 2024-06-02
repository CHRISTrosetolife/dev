import { tautology } from "./tautology.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  visit(
    root,
    (n) => object_property_get(n, "children") || [],
    tautology,
    lambda,
    [],
  );
}
