import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
export function ceb_form1(parsed) {
  let q = parsed("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  log({
    q_children,
  });
  return q_children;
}
