import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_img } from "./html_img.mjs";
import { each_range } from "./each_range.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_gs() {
  let root = html_style_default_initialize();
  each_range(30, (i) =>
    html_img(
      root,
      string_combine_multiple(["pipoya\\rpg_32\\sliced\\base_", i, ".png"]),
    ),
  );
}
