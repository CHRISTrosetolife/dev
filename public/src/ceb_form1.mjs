import { log } from "./log.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_single } from "./list_single.mjs";
export function ceb_form1(root) {
  js_visit(root, log);
  let q = root("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
