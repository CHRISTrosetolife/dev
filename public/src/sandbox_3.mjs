import { each } from "./each.mjs";
import { list_sort } from "./list_sort.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_parse_visit_attribute } from "./html_parse_visit_attribute.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { bible_chapter_parsed } from "./bible_chapter_parsed.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { object_properties } from "./object_properties.mjs";
export async function sandbox_3() {
  let found = {};
  let bible_folder = "engwebu";
  await bible_books_chapter_each(bible_folder, async function (chapter_name) {
    let root = await bible_chapter_parsed(bible_folder, chapter_name);
    let main = html_parse_visit_class_single(root, "main");
    html_parse_visit_attribute(main, function (v) {
      let { node } = v;
      let { attribs } = node;
      let class2 = object_property_get(attribs, "class");
      if (object_property_exists_not(found, class2)) {
        object_property_set(object, class2, {
          chapter_name,
          class: class2,
          text: html_parse_text(node),
        });
      }
    });
  });
  let ps = object_properties(found);
  list_sort(ps);
  each(list, function (item) {});
}
