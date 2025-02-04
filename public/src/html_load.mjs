import { object_property_set } from "./object_property_set.mjs";
import { set_empty_is } from "./set_empty_is.mjs";
import { set_new } from "./set_new.mjs";
import { global_function } from "./global_function.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_loader } from "./html_loader.mjs";
import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
export async function html_load(lambda) {
  let g = global_function(html_load);
  let s = object_property_initialize_get(g, "set", () => set_new());
  if (set_empty_is(s)) {
    let overlay = html_loader();
    object_property_set(g, "overlay", overlay);
  }
  let o = {};
  await sleep_0();
}
