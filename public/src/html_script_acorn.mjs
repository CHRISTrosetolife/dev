import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export async function html_script_acorn(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/acorn/8.14.0/acorn.js",
  );
  html_attribute_set(
    c,
    "integrity",
    "sha512-LmDbUhyR0zKgMllqAf67Ye09qA/UXZ87QiqvJQnKAi9bxkKu42lbiaPaWIvWP3Jj8Qs8BfZKKP6YMXDFGxdv3w==",
  );
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
  await html_load_wait(c);
}
