import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { app_memorize_on_keydown } from "./app_memorize_on_keydown.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_size } from "./list_size.mjs";
import { html_hash } from "./html_hash.mjs";
import { app_memorize_group } from "./app_memorize_group.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
import { html_style } from "./html_style.mjs";
import { list_get } from "./list_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_index } from "./list_index.mjs";
import { list_map } from "./list_map.mjs";
import { string_replace } from "./string_replace.mjs";
import { html_on } from "./html_on.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_memorize() {
  let context = {};
  context.settings = false;
  let root = html_style_default_initialize();
  html_style(root, {
    margin: "0",
  });
  object_merge(context, {
    root,
  });
  let file_path = bible_engbsb_storage_path_file("JHN19");
  let verses = await http_get(storage_url(file_path));
  object_merge(context, {
    verses,
  });
  let verses_length = list_size(context.verses);
  let groups = app_memorize_group(verses_length);
  object_merge(context, {
    groups,
  });
  context.button_height = 7;
  app_memorize_group_current_set(context, list_first(context.groups));
  html_hash({
    verses: (value) => {
      let mapped = list_map(context.groups, (g) =>
        app_memorize_group_to_range_string(context, g),
      );
      let mapped2 = list_map(mapped, (m) => string_replace(m, " ", ""));
      let index = list_index(mapped2, value);
      let g = list_get(context.groups, index);
      app_memorize_group_current_set(context, g);
    },
    pattern: (value) => {
      context.pattern_index = list_index(context.patterns, value);
    },
  });
  refresh_memorize();
  function refresh_memorize() {
    app_memorize_refresh_memorize(context);
  }
  html_on(root, "keydown", (e) => {
    let { keyCode } = e;
    let c = String.fromCharCode(keyCode);
    let c_lower = string_case_lower(c);
    app_memorize_on_keydown(context, c_lower);
  });
  context.errored_keys = [];
}
