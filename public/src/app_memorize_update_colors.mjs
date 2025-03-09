import { html_scroll_nearest } from "./html_scroll_nearest.mjs";
import { html_data_has } from "./html_data_has.mjs";
import { html_style_font_color_default_set } from "./html_style_font_color_default_set.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { list_get } from "./list_get.mjs";
export function app_memorize_update_colors(context) {
  let save = app_memorize_save_get(context);
  let current_verse = list_get(context.verse_elements, save.verse_index);
  let { verse_element, token_objects } = current_verse;
  let current_token = list_get(token_objects, save.token_index);
  html_scroll_nearest(verse_element);
  let { spacer2, token_element } = current_token;
  html_style_visible(spacer2);
  if (undefined_not_is(context.previous_spacer2)) {
    html_style_hidden(context.previous_spacer2);
  }
  let { previous_token_element } = context;
  if (undefined_not_is(previous_token_element)) {
    html_style_visible(previous_token_element);
    if (!html_data_has(previous_token_element, "error")) {
      html_style_font_color_default_set(previous_token_element);
    }
  }
  context.previous_spacer2 = spacer2;
  context.previous_token_element = token_element;
}
