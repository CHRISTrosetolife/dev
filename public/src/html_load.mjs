import { set_new } from "./set_new.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { global_function } from "./global_function.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_loader } from "./html_loader.mjs";
export async function html_load(lambda) {
  let g = global_function(html_load);
  object_property_set(g, "set", set_new());
  let o = {};
  let overlay = html_loader();
  await sleep_0();
}
