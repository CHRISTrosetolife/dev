import { app_language_2_font_size } from "./app_language_2_font_size.mjs";
import { app_language_2_group_get } from "./app_language_2_group_get.mjs";
import { app_language_2_words_initialize } from "./app_language_2_words_initialize.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { app_language_2_refresh_learn } from "./app_language_2_refresh_learn.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { app_language_initialize } from "./app_language_initialize.mjs";
import { app_language_group_index_changed_inner } from "./app_language_group_index_changed_inner.mjs";
export async function app_language_2(app_fn, language_learn, language_fluent) {
  let name = "all";
  let root = await app_language_initialize();
  html_style_default_font_size(app_language_2_font_size());
  html_style_a_plain();
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    root,
  };
  await app_language_group_index_changed_inner(context, name);
  let { words, group_flat } = app_language_2_group_get(context);
  app_language_2_words_initialize(context, words, group_flat);
  await app_language_2_refresh_learn(context);
}
