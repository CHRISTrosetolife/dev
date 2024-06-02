import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  visit(
    root,
    (n) => {
      returnobject_property_get(n, "children") || [];
    },
    tautology,
    lambda,
    [],
  );
}
