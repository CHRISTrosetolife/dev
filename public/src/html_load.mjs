import { log } from "./log.mjs";
import { html_remove } from "./html_remove.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { set_remove } from "./set_remove.mjs";
import { set_add } from "./set_add.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { set_empty_is } from "./set_empty_is.mjs";
import { set_new } from "./set_new.mjs";
import { global_function } from "./global_function.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_loader } from "./html_loader.mjs";
import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
export async function html_load(lambda) {
  let g = global_function(html_load);
  let s = object_property_initialize_get(g, "set", function () {
    let v = set_new();
    return v;
  });
  if (set_empty_is(s)) {
    let overlay = html_loader();
    await sleep_0();
    object_property_set(g, "overlay", overlay);
  }
  let o = {};
  set_add(s, o);
  try {
    let result = await lambda();
    return result;
  } catch (e) {
    log({
      e,
    });
    throw e;
  } finally {
    set_remove(s, o);
    if (set_empty_is(s)) {
      let overlay = object_property_get(g, "overlay");
      html_remove(overlay);
    }
  }
}
