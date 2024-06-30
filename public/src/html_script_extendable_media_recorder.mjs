import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export async function html_script_extendable_media_recorder() {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdn.jsdelivr.net/npm/extendable-media-recorder@9.2.4/build/es5/bundle.min.js",
  );
  await html_load_wait(c);
}
