import { each_range } from "./each_range.mjs";
import { html_spacer_vertical } from "./html_spacer_vertical.mjs";
export function html_spacer_vertical_2(root) {
  let count = 2;
  each_range(count, () => {
    html_spacer_vertical(root);
  });
}
