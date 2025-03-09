import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { html_bible_verse_define } from "./html_bible_verse_define.mjs";
import { bible_storage_version_http_get } from "./bible_storage_version_http_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { html_style_default_initialize_axios } from "./html_style_default_initialize_axios.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_chapter() {
  let root = await html_style_default_initialize_axios();
  html_style_a_plain();
  let lookup = html_hash_lookup();
  if (object_property_exists_not(lookup, app_share_chapter())) {
    html_p_text("Needs chapter in URL");
    return;
  }
  let version_code = "engbsb";
  let chapter_name = object_property_get(lookup, app_share_chapter());
  let verses = await bible_storage_version_http_get(version_code, chapter_name);
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  each(verses, function (verse) {
    let v_component = html_div(root);
    html_bible_verse_define(v_component, book_code, chapter_code, verse);
  });
}
