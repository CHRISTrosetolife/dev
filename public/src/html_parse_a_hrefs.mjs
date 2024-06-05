import { log } from "./log.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { list_adder } from "./list_adder.mjs";
export function html_parse_a_hrefs(root, condition) {
  return list_adder((la) =>
    html_parse_visit_tag(root, "a", (v) => {
      let { node } = v;
      let href = html_parse_href(node);
      log({
        href,
      });
      if (condition(href)) {
        la(href);
      }
    }),
  );
}
