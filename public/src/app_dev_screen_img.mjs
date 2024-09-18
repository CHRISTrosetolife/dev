import { app_name } from "./app_name.mjs";
import { app_dev_screenshots_extension } from "./app_dev_screenshots_extension.mjs";
import { string_to } from "./string_to.mjs";
import { string_combine } from "./string_combine.mjs";
import { app_dev } from "./app_dev.mjs";
import { path_join } from "./path_join.mjs";
import { html_img_limited_centered } from "./html_img_limited_centered.mjs";
import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export function app_dev_screen_img(fn, root, i) {
  let name = string_prefix_without(fn.name, app_dev_screen_prefix());
  html_img_limited_centered(
    root,
    path_join([
      app_name(app_dev),
      name,
      string_combine(string_to(i), app_dev_screenshots_extension()),
    ]),
  );
}
