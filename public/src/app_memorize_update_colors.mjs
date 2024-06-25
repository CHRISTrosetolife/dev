import { log } from "./log.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { list_get } from "./list_get.mjs";
export function app_memorize_update_colors(context) {
  let current_verse = list_get(context.verse_elements, context.verse_index);
  let { verse_element, token_objects } = current_verse;
  let current_token = list_get(token_objects, context.token_index);
  html_scroll_center(verse_element);
  let { spacer2, token_element } = current_token;
  html_style_visible(spacer2);
  if (undefined_not_is(context.previous_spacer2)) {
    html_style_hidden(context.previous_spacer2);
  }
  if (undefined_not_is(context.previous_token_element)) {
    html_style_visible(context.previous_token_element);
    log({
      message: "here",
      previous_token_element: context.previous_token_element,
    });
  }
  context.previous_spacer2 = spacer2;
  context.previous_token_element = token_element;
}
