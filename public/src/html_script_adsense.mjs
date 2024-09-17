import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_script_adsense(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(c, "async", "");
  html_attribute_set(
    c,
    "src",
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6654470128757682",
  );
  html_attribute_set(c, "crossorigin", "anonymous");
}
