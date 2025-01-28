import { html_spacer_vertical } from "./html_spacer_vertical.mjs";
import { each_range } from "./each_range.mjs";
export function html_spacer_vertical_n(count, root) {
  each_range(count, () => {
    html_spacer_vertical(root);
  });
}
