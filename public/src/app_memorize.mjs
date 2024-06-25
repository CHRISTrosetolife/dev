import { app_memorize_frame } from "./app_memorize_frame.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_style } from "./html_style.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_memorize() {
  let context = {};
  context.settings = false;
  let root = html_style_default_initialize();
  html_style(root, {
    margin: "0",
  });
  object_merge(context, {
    root,
  });
  await app_memorize_frame(context);
}
