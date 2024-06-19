import { app_language_refresh_learn } from "./app_language_refresh_learn.mjs";
import { app_language_refresh_quiz } from "./app_language_refresh_quiz.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
import { http_storage } from "./http_storage.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_language(
  app_fn,
  language_learn,
  language_fluent,
  invert,
) {
  assert_arguments_length(arguments, 4);
  let context = {
    app_fn,
    language_learn,
    language_fluent,
    invert,
  };
  let root = html_style_default_initialize();
  object_merge(context, {
    root,
  });
  html_style_default_font_size(3.5);
  let group_index = 0;
  let { group, definitions, inverted } = await http_storage(
    app_language_group_path(language_learn, language_fluent, group_index),
  );
  object_merge(context, {
    group,
    definitions,
    inverted,
  });
  storage_local_initialize(app_fn, "position", {
    left: 0,
    right: list_index_last(group),
  });
  refresh_node();
  async function refresh_node() {
    await app_language_refresh_node(context);
  }
  async function refresh_quiz(settings) {
    await app_language_refresh_quiz(context, settings);
  }
  async function refresh_learn(pair_index) {
    app_language_refresh_learn(root, app_fn, group, language_learn, pair_index);
  }
}
