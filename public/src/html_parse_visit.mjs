import { list_not_is } from "./list_not_is.mjs";
import { assert } from "./assert.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  assert(list_not_is, [node]);
  visit(
    root,
    (n) => object_property_get_or(n, "children", []),
    tautology,
    lambda,
    [],
  );
}
