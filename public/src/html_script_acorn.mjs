import { html_load_wait } from "./html_load_wait.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export async function html_script_acorn(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/acorn/8.11.3/acorn.js",
  );
  html_attribute_set(
    c,
    "integrity",
    "sha512-rlm77cSR5crHjxp0RrQwp9mCVada2Tp0GVzVm/M59Z45daZf7C24VNGVbg58swEnmIR2Oq65qHPr3mZqTn8iag==",
  );
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
  await html_load_wait(c);
}
