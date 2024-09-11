import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { app_memorize_keyboard_reset } from "./app_memorize_keyboard_reset.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { keyboard_near } from "./keyboard_near.mjs";
import { app_memorize_group_next } from "./app_memorize_group_next.mjs";
import { error } from "./error.mjs";
import { app_memorize_refresh_memorize } from "./app_memorize_refresh_memorize.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
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
import { html_inner_set } from "./html_inner_set.mjs";
export async function app_memorize_on_keydown(context, key) {
  let save = app_memorize_save_get(context);
  let j = list_get(context.save.group_current, save.verse_index);
  let current_verse = list_get(context.verses, j);
  let { tokens } = current_verse;
  let current_token = list_get(tokens, context.token_index);
  let letter_first = string_case_lower(string_letter_first(current_token));
  let keyboard_button_actual = object_property_get(
    context.keyboard_buttons,
    key,
  );
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
    while (true) {
      context.token_index++;
      if (context.token_index > list_index_last(tokens)) {
        break;
      }
      let token_next = list_get(tokens, context.token_index);
      let letter_next = string_letter_first(token_next);
      if (letter_next !== null) {
        break;
      }
    }
    let tokens_length = list_size(tokens);
    if (greater_than_equal(context.token_index, tokens_length)) {
      save.verse_index++;
      app_memorize_save(context);
      context.token_index = 0;
    }
    let group_current_length = list_size(context.save.group_current);
    if (greater_than_equal(save.verse_index, group_current_length)) {
      save.verse_index = 0;
      let pattern = list_get(context.patterns, context.save.pattern_index);
      if (and(equal(pattern, "0"), save.mistakes)) {
        save.mistakes = false;
        app_memorize_save(context);
      } else {
        save.pattern_index++;
        app_memorize_save(context);
        if (greater_than_equal(save.pattern_index, context.patterns_length)) {
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
      await app_memorize_refresh_memorize(context);
    } else {
      app_memorize_update_colors(context);
      html_inner_set(context.recent.element, current_token);
    }
    app_memorize_keyboard_reset(context);
    let keyboard_button_expected = object_property_get(
      context.keyboard_buttons,
      letter_first,
    );
    html_style_success(keyboard_button_expected);
  } else {
    if (!context.mistakes) {
      app_memorize_keyboard_reset(context);
    }
    context.mistakes = true;
    html_style_visible(context.previous_token_element);
    html_style_font_color(context.previous_token_element, "red");
    if (context.style.error) {
      html_style(context.previous_token_element, context.style.error);
    }
    html_style_wrong(keyboard_button_actual);
  }
}
