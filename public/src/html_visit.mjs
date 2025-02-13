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
    lambda,
    [],
  );
}
