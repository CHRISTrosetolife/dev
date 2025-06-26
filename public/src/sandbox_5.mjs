import { list_take } from "./list_take.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { html_parse_tag_name } from "./html_parse_tag_name.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { equal } from "./equal.mjs";
import { html_parse_visit_tag_list } from "./html_parse_visit_tag_list.mjs";
import { log } from "./log.mjs";
import { html_parse_children } from "./html_parse_children.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
import { grace_facebook_data_messages_jared_cache } from "./grace_facebook_data_messages_jared_cache.mjs";
import { list_first } from "./list_first.mjs";
import { assert } from "./assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox_5() {
  let v4 = await grace_facebook_data_messages_jared_cache();
  let f = list_first(v4);
  await on_item(f);
  return;
  await each_async(v4, async function (item) {
    await on_item(item);
  });
  async function on_item(item) {
    let contents = object_property_get(item, "contents");
    let root = await html_parse(contents);
    object_property_set(item, "parsed", root);
    let main = html_parse_visit_tag_single(root, "main");
    let sections = html_parse_visit_tag_list(main, "section");
    let fs = list_take(sections, 10);
    list_map(fs, function (f) {});
    let c = html_parse_children(f);
    log({
      c: list_map(c, html_parse_tag_name),
    });
    assert(equal, [list_size(c), 3]);
    let h2 = html_parse_visit_tag_single(f, "h2");
    let divs = list_filter(c, function (child) {
      return html_parse_tag_named(child, "div");
    });
    let footer = html_parse_visit_tag_single(f, "footer");
    log({
      user: html_parse_text(h2),
      message: html_parse_text(list_single(divs)),
      when: html_parse_text(footer),
    });
  }
}
