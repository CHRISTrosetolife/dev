import { list_wait } from "./list_wait.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { assert } from "./assert.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { grace_facebook_data_messages_jared_cache } from "./grace_facebook_data_messages_jared_cache.mjs";
export async function grace_facebook_data_messages_jared_parsed() {
  let v4 = await grace_facebook_data_messages_jared_cache();
  let v2 = await list_wait(v4, async function (item) {
    let messages = await on_item(item);
    let path = object_property_get(item, "path");
    let v = {
      path,
      messages,
    };
    return v;
  });
  return v2;
  async function on_item(item) {
    let contents = object_property_get(item, "contents");
    let root = await html_parse(contents);
    object_property_set(item, "parsed", root);
    let main = html_parse_visit_tag_single(root, "main");
    let sections = html_parse_visit_tag_list(main, "section");
    let m = list_map(sections, function (section) {
      let c = html_parse_children(section);
      assert(equal, [list_size(c), 3]);
      let h2 = html_parse_visit_tag_single(section, "h2");
      let divs = list_filter(c, function (child) {
        let v3 = html_parse_tag_named(child, "div");
        return v3;
      });
      let footer = html_parse_visit_tag_single(section, "footer");
      let v5 = {
        user: html_parse_text(h2),
        message: html_parse_text(list_single(divs)),
        when: html_parse_text(footer),
      };
      return v5;
    });
    return m;
  }
}
