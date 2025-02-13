import { github_username } from "./github_username.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_import_path } from "./js_code_import_path.mjs";
import { folder_current } from "./folder_current.mjs";
import { app_html_generate_import_path } from "./app_html_generate_import_path.mjs";
import { html_parse_append } from "./html_parse_append.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_html_generate_global } from "./app_html_generate_global.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_remove } from "./html_parse_remove.mjs";
import { each } from "./each.mjs";
import { apps_html_transform } from "./apps_html_transform.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_string } from "./js_code_string.mjs";
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
    let head = html_parse_visit_tag_single(root, "head");
    html_parse_append(
      parsed,
      head,
      list_join_newline([
        string_combine_multiple([
          '<script id="',
          string_combine_multiple([github_username(), "_global"]),
          '">',
        ]),
        app_html_generate_global(),
        "</script>",
      ]),
    );
    let import_path = app_html_generate_import_path(folder_current());
    let lines = [
      string_combine_multiple([
        '<script type="module" id="',
        string_combine_multiple([github_username(), "_app"]),
        '">',
      ]),
      js_code_import_path(import_path, fn_name("app_load")),
      js_code_statement(
        js_code_call_args(fn_name("app_load"), [js_code_string(name)]),
      ),
      "</script>",
    ];
    let script_html = list_join_newline(lines);
    html_parse_append(parsed, head, script_html);
  }
}
