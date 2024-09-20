import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export async function html_script_astring(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    " https://cdn.jsdelivr.net/npm/astring@1.8.6/dist/astring.min.js ",
  );
  await html_load_wait(c);
}
