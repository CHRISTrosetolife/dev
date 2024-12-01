import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_remove } from "./html_parse_remove.mjs";
import { each } from "./each.mjs";
import { apps_html_transform } from "./apps_html_transform.mjs";
export async function sandbox() {
  return await apps_html_transform(transform);
  function transform(root, name, parsed) {
    let f = html_parse_visit_tag_list(root, "script");
    if (name !== "bible") {
      return;
    }
    each(f, (g) => {
      html_parse_remove(parsed, g);
    });
  }
}
