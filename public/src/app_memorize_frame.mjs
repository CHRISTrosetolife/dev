import { object_property_initialize_get } from "./object_property_initialize_get.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { html_on_remove } from "./html_on_remove.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
import { app_memorize_on_keydown } from "./app_memorize_on_keydown.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { html_on } from "./html_on.mjs";
import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { list_index } from "./list_index.mjs";
import { html_hash } from "./html_hash.mjs";
import { list_first } from "./list_first.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { app_memorize_group } from "./app_memorize_group.mjs";
import { list_size } from "./list_size.mjs";
import { object_merge } from "./object_merge.mjs";
import { html_document_body } from "./html_document_body.mjs";
export async function app_memorize_frame(context) {
  let save = app_memorize_save_get(context);
  object_property_initialize_get(save, "book_code", "JHN");
  let chapter_code = "JHN19";
  let verses = await bible_engbsb_storage_http_get(chapter_code);
  object_merge(context, {
    verses,
  });
  let verses_length = list_size(context.verses);
  let groups = app_memorize_group(verses_length);
  object_merge(context, {
    groups,
  });
  context.button_height = 7;
  let group = object_property_get_or(
    save,
    "group_current",
    list_first(context.groups),
  );
  html_hash({
    verses: (value) => {
      group = app_memorize_groups_get(context, value);
    },
    pattern: (value) => {
      let save = app_memorize_save_get(context);
      save.pattern_index = list_index(context.patterns, value);
      app_memorize_save(context);
    },
  });
  app_memorize_group_current_set(context, group);
  app_memorize_refresh_memorize(context);
  let type = "keydown";
  html_on(html_document_body(), type, on_keydown);
  function on_keydown(e) {
    let { keyCode } = e;
    let c = String.fromCharCode(keyCode);
    let c_lower = string_case_lower(c);
    app_memorize_on_keydown(context, c_lower);
  }
  context.cleanup = () => {
    html_on_remove(html_document_body(), type, on_keydown);
  };
}
