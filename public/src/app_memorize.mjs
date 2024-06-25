import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
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
  let c = html_element(root, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js",
  );
  html_attribute_set(
    c,
    "integrity",
    "sha512-PJa3oQSLWRB7wHZ7GQ/g+qyv6r4mbuhmiDb8BjSFZ8NZ2a42oTtAq5n0ucWAwcQDlikAtkub+tPVCw4np27WCg==",
  );
  await html_load_wait(c);
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
  await app_memorize_frame(context);
}
