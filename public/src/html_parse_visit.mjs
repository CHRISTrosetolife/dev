import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  visit(
    root,
    (n) => {
      if (object_property_exists_not(n, "children")) {
        return [];
      }
      return object_property_get(n, "children");
    },
    tautology,
    lambda,
    [],
  );
}
