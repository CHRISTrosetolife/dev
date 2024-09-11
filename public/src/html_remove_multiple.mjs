import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
export function html_remove_multiple(tags) {
  each(tags, (tag) => {
    html_remove(tag);
  });
}
