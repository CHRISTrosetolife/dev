import { html_parse_children } from "./html_parse_children.mjs";
import { list_not_is } from "./list_not_is.mjs";
import { assert } from "./assert.mjs";
import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
export function html_parse_visit(root, lambda) {
  assert(list_not_is, [root]);
  visit(root, html_parse_children, tautology, lambda, []);
}
