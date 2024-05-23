import { list_single } from "./list_single.mjs";
export function ceb_form1(parsed) {
  let q = parsed.querySelectorAll("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
