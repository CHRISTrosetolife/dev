import { app_memorize_keyboard } from "./app_memorize_keyboard.mjs";
import { app_memorize_keyboard_height } from "./app_memorize_keyboard_height.mjs";
import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { app_memorize_update_colors } from "./app_memorize_update_colors.mjs";
import { equal } from "./equal.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { mod } from "./mod.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_strong_text } from "./html_strong_text.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { number_to_dvh } from "./number_to_dvh.mjs";
import { html_style } from "./html_style.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_size } from "./list_size.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_element } from "./html_element.mjs";
import { string_split } from "./string_split.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_memorize_refresh_memorize(context) {
  let { root } = context;
  html_clear(root);
  context.verse_index = 0;
  context.token_index = 0;
  context.previous_spacer2 = undefined;
  context.previous_token_element = undefined;
  context.verse_elements = undefined;
  context.mistakes = false;
  context.keyboard_buttons = {};
  let p = list_get(context.patterns, context.save.pattern_index);
  let pattern = string_split(p, "");
  if (context.settings) {
    let settings_element = html_element(root, "div");
    let settings_button = html_button_width_full_text_click(
      settings_element,
      "⚙️ settings",
      () => app_memorize_refresh_settings(context),
    );
    html_style_margin_x(settings_button, 0);
  }
  let verses_element = html_element(root, "div");
  let keyboard_height = app_memorize_keyboard_height(context);
  let offset = add(keyboard_height, context.settings ? 7 : 0);
  let height_max = subtract(100, offset);
  html_style(verses_element, {
    "max-height": number_to_dvh(height_max),
    "min-height": number_to_dvh(height_max),
    overflow: "hidden",
  });
  let pattern_length = list_size(pattern);
  let token_count = 0;
  context.verse_elements = list_adder((la) => {
    each_index(context.save.group_current, (i, j) => {
      let verse = list_get(context.verses, i);
      let verse_element = html_element(verses_element, "div");
      let { tokens, verse_number } = verse;
      let number_element = html_strong_text(verse_element, verse_number);
      if (context.style.text) {
        html_style(number_element, context.style.text);
      }
      html_on_click(number_element, () => {
        context.token_index = 0;
        context.verse_index = j;
        html_scroll_center(verse_element);
      });
      let token_objects = list_adder((la) => {
        each_index(tokens, (token, j) => {
          let m = mod(token_count, pattern_length);
          let token_pattern = list_get(pattern, m);
          let spacer = html_span_text(verse_element, " ");
          let spacer2 = html_span_text(verse_element, ".");
          html_style_background_color(spacer2, "green");
          html_style_font_color(spacer2, "green");
          if (context.style.spacer2) {
            html_style(spacer2, context.style.spacer2);
          }
          for (let s of [spacer, spacer2]) {
            html_style_hidden(s);
          }
          let token_element = html_span_text(verse_element, token);
          if (context.style.text) {
            html_style(token_element, context.style.text);
          }
          if (equal(token_pattern, "0")) {
            html_style_hidden(token_element);
          }
          la({
            spacer2,
            token_element,
          });
          token_count++;
        });
      });
      la({
        verse_element,
        token_objects,
      });
    });
  });
  app_memorize_update_colors(context);
  app_memorize_keyboard(context);
}
