import { object_property_get } from "./object_property_get.mjs";
import { tautology } from "./tautology.mjs";
import { html_child_nodes } from "./html_child_nodes.mjs";
import { visit } from "./visit.mjs";
export function html_visit(element, lambda) {
  visit(
    element,
    function (p) {
      let cs = html_child_nodes(p);
      let v2 = cs;
      return v2;
    },
    tautology,
    function (v) {
      let node = object_property_get(v, "node");
      lambda(node);
    },
    [],
  );
}
