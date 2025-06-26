import { html_parse_children } from "./html_parse_children.mjs";
import { html_parse_visit_tag_single } from "./html_parse_visit_tag_single.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { html_parse } from "./html_parse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each_async } from "./each_async.mjs";
import { grace_facebook_data_messages_jared_cache } from "./grace_facebook_data_messages_jared_cache.mjs";
import { list_first } from "./list_first.mjs";
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
    html_parse_children(main);
  }
}
