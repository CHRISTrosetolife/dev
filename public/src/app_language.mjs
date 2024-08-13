import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { html_css_flags } from "./html_css_flags.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_group_index_changed } from "./app_language_group_index_changed.mjs";
import { app_language_position_initial } from "./app_language_position_initial.mjs";
import { storage_local_initialize } from "./storage_local_initialize.mjs";
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
  let body = html_style_default_initialize();
  html_css_flags(body);
  let root = html_div(body);
  object_merge(context, {
    root,
  });
  html_style_default_font_size(3.5);
  await app_language_group_index_changed(context);
  storage_local_initialize(
    app_fn,
    "position",
    app_language_position_initial(context),
  );
  let screen = storage_local_initialize(context.app_fn, "node");
  let fn_name = "app_language_refresh_" + screen;
  await app_language_refresh_node(context);
}
