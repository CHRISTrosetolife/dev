import { html_parse_unparse } from "./html_parse_unparse.mjs";
import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
  let p = await html_parse_parsed("<b>hi</b>");
  let parsed = object_property_get(p, "parsed");
  let root = object_property_get(p, "root");
  let head = html_parse_visit_tag_single(root, "head");
  let body = html_parse_visit_tag_single(root, "body");
  let tag = {
    type: "tag",
    name: "script",
    attribs: {
      id: string_combine_multiple([repository_name(), "_app"]),
    },
    chilren: [
      {
        type: "text",
        data: "",
      },
    ],
  };
  body.children.push(tag);
  return html_parse_unparse(parsed);
  parsed(head).append("<test />");
  return await apps_html_transform(transform);
  async function transform(root, name, parsed) {
    if (name !== "bible") {
      return;
    }
    let f = html_parse_visit_tag_list(root, "script");
    each(f, (g) => {
      return;
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
    let tag = {
      type: "tag",
      name: "script",
      attribs: {},
      chilren: [
        {
          type: "text",
          data: content,
        },
      ],
    };
    let children = object_property_get(head, "children");
    log({
      children,
    });
    parsed(head).append(
      string_combine_multiple([
        '<script id="',
        string_combine_multiple([repository_name(), "_app"]),
        '">',
      ]),
    );
    log({
      head,
      children,
    });
  }
}
