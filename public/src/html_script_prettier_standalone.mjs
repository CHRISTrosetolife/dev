import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_script_prettier_standalone(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/prettier/2.0.3/standalone.js",
  );
  html_attribute_set(
    c,
    "integrity",
    "sha512-kZgYwuJlmuFDs982ccZLP9D+TIz/FqkxFQe+G0/TY11X4WqwUZn6P263vtzyt56GThngcoOD9JFvdJsT+D52ow==",
  );
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
}
