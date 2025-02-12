import { ceb_form1 } from "./ceb_form1.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
export async function ceb_html_cache_parse_form1(url) {
  let parsed = await html_cache_parse(url);
  let { children, form1 } = ceb_form1(parsed);
  return {
    parsed,
    children,
    form1,
  };
}
