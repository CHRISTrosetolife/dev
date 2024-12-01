import { html_parse_append } from "./html_parse_append.mjs";
import { repository_name } from "./repository_name.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { app_prefix } from "./app_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { function_dependencies_string } from "./function_dependencies_string.mjs";
import { app_html_generate_global } from "./app_html_generate_global.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_remove } from "./html_parse_remove.mjs";
import { each } from "./each.mjs";
import { apps_html_transform } from "./apps_html_transform.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function sandbox() {
  await apps_html_transform(transform);
  async function transform(root, name, parsed) {
    if (name !== "bible") {
      return;
    }
    let f = html_parse_visit_tag_list(root, "script");
    each(f, (g) => {
      html_parse_remove(parsed, g);
    });
    let lines = [
      app_html_generate_global(),
      await function_dependencies_string(
        string_combine_multiple([app_prefix(), name]),
      ),
    ];
    let content = list_join_newline(lines);
    let head = html_parse_visit_tag_single(root, "head");
    let script_html = string_combine_multiple([
      '<script id="',
      string_combine_multiple([repository_name(), "_app"]),
      '">',
      content,
      "</script>",
    ]);
    html_parse_append(parsed, head, script_html);
  }
}
