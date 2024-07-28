import { list_index_last } from "./list_index_last.mjs";
import { keyboard_near } from "./keyboard_near.mjs";
import { app_memorize_group_next } from "./app_memorize_group_next.mjs";
import { error } from "./error.mjs";
import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { list_add } from "./list_add.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { app_memorize_button_keyboard_stylize } from "./app_memorize_button_keyboard_stylize.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { html_style } from "./html_style.mjs";
import { app_memorize_update_colors } from "./app_memorize_update_colors.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { and } from "./and.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { string_letter_first } from "./string_letter_first.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_get } from "./list_get.mjs";
export function app_memorize_on_keydown(context, key) {
  let j = list_get(context.group_current, context.verse_index);
  let current_verse = list_get(context.verses, j);
  let { tokens } = current_verse;
  let current_token = list_get(tokens, context.token_index);
  let letter_first = string_case_lower(string_letter_first(current_token));
  if (keyboard_near(key, letter_first)) {
    if (context.short) {
      if (context.group_next) {
        context.group_next({
          context,
          tokens,
        });
        return;
      }
    }
    context.token_index++;
    if (list_index_last()) {
      let current_token = list_get(tokens, context.token_index);
      let letter_first = string_letter_first(current_token);
    }
    let tokens_length = list_size(tokens);
    if (greater_than_equal(context.token_index, tokens_length)) {
      context.verse_index++;
      context.token_index = 0;
    }
    let group_current_length = list_size(context.group_current);
    if (greater_than_equal(context.verse_index, group_current_length)) {
      context.verse_index = 0;
      let pattern = list_get(context.patterns, context.pattern_index);
      if (and(equal(pattern, "0"), context.mistakes)) {
        context.mistakes = false;
      } else {
        context.pattern_index++;
        if (
          greater_than_equal(context.pattern_index, context.patterns_length)
        ) {
          if (context.group_next) {
            context.group_next({
              context,
              tokens,
            });
            return;
          }
          let group_next = app_memorize_group_next(context);
          app_memorize_group_current_set(context, group_next);
        }
      }
      app_memorize_refresh_memorize(context);
    } else {
      app_memorize_update_colors(context);
    }
    for (let errored_key of context.errored_keys) {
      html_style(errored_key, html_style_button_default_value());
      app_memorize_button_keyboard_stylize(context, errored_key);
    }
  } else {
    context.mistakes = true;
    html_style_visible(context.previous_token_element);
    html_style_font_color(context.previous_token_element, "red");
    if (context.style.error) {
      html_style(context.previous_token_element, context.style.error);
    }
    let keyboard_button = object_property_get(context.keyboard_buttons, key);
    html_style_wrong(keyboard_button);
    list_add(context.errored_keys, keyboard_button);
  }
}
