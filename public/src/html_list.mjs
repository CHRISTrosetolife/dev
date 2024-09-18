import { html_div_text } from "./html_div_text.mjs";
import { each } from "./each.mjs";
export function html_list(ns, root) {
  each(ns, (item) => {
    html_div_text(root, item);
  });
}
