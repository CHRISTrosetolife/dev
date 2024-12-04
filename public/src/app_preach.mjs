import { log } from "./log.mjs";
import { sermons_list } from "./sermons_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_preach() {
  let body = html_style_default_initialize();
  let s = sermons_list();
  log({
    s,
  });
}
