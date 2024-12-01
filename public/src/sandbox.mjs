import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
import { apps_html_transform } from "./apps_html_transform.mjs";
import { list_filter } from "./list_filter.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
export async function sandbox() {
  await each_async(list, async (item) => {});
  return await apps_html_transform(transform);
  function transform(root, name) {
    let body = html_parse_visit_tag_single(root, "body");
    let cs = html_parse_children(body);
    let f = list_filter(cs, (c) => html_parse_tag_named(c, "script"));
    if (list_size(f) !== 2) {
      return;
    }
    if (name !== "bible") {
      return;
    }
  }
}
