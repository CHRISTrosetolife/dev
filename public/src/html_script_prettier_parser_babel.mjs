import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
export function html_script_prettier_parser_babel(parent) {
  let c = html_element(parent, "script");
  html_attribute_set(
    c,
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/prettier/2.0.3/parser-babel.min.js",
  );
  html_attribute_set(
    c,
    "integrity",
    "sha512-2VpL2CQOwACkU58IzGit5Zvl1cinncah3Pd6k0BEhzRhx7jlCAPtK+b8E10+17TrMFg6Nzs8pZGHBJqAR8Tjbg==",
  );
  html_attribute_set(c, "crossorigin", "anonymous");
  html_attribute_set(c, "referrerpolicy", "no-referrer");
}
