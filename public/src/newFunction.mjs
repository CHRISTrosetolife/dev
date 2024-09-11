import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
export function newFunction(tags) {
  each(tags, (tag) => {
    html_remove(tag);
  });
}
