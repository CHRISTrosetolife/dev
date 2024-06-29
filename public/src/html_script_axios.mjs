import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export async function html_script_axios(root) {
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
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
  await html_load_wait(c);
  return c;
}
