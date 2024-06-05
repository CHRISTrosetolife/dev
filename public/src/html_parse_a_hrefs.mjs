import { html_parse_text } from "./html_parse_text.mjs";
import { log } from "./log.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { html_parse_visit_tag } from "./html_parse_visit_tag.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function html_parse_a_hrefs(root, condition) {
  return list_adder((la) =>
    html_parse_visit_tag(root, "a", (v) => {
      let { node } = v;
      log({
        t: html_parse_text(node),
      });
      let attribs = node;
      if (object_property_exists(attribs, "href")) {
        let href = html_parse_href(node);
        if (condition(href)) {
          la(href);
        }
      }
    }),
  );
}
