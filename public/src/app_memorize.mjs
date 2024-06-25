import { app_memorize_button_keyboard_stylize } from "./app_memorize_button_keyboard_stylize.mjs";
import { app_memorize_update_colors } from "./app_memorize_update_colors.mjs";
import { number_to_dvh } from "./number_to_dvh.mjs";
import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { app_memorize_group_to_range_string } from "./app_memorize_group_to_range_string.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { list_size } from "./list_size.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { html_style_button_default_value } from "./html_style_button_default_value.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { html_hash } from "./html_hash.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { app_memorize_group } from "./app_memorize_group.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { list_adder } from "./list_adder.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { string_letter_first } from "./string_letter_first.mjs";
import { multiply } from "./multiply.mjs";
import { string_case_upper } from "./string_case_upper.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_button } from "./html_button.mjs";
import { html_div } from "./html_div.mjs";
import { subtract } from "./subtract.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
import { storage_url } from "./storage_url.mjs";
import { http_get } from "./http_get.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_strong_text } from "./html_strong_text.mjs";
import { each_index } from "./each_index.mjs";
import { html_style } from "./html_style.mjs";
import { string_split } from "./string_split.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { add } from "./add.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_first } from "./list_first.mjs";
import { mod } from "./mod.mjs";
import { add_1 } from "./add_1.mjs";
import { list_index } from "./list_index.mjs";
import { list_map } from "./list_map.mjs";
import { string_replace } from "./string_replace.mjs";
import { html_on } from "./html_on.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_add } from "./list_add.mjs";
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
  function refresh_settings() {
    app_memorize_refresh_settings(context, refresh_memorize);
  }
  function refresh_memorize() {
    let { root } = context;
    html_clear(root);
    context.verse_index = 0;
    context.token_index = 0;
    context.previous_spacer2 = undefined;
    context.previous_token_element = undefined;
    context.verse_elements = undefined;
    context.mistakes = false;
    context.keyboard_buttons = {};
    let p = list_get(context.patterns, context.pattern_index);
    let pattern = string_split(p, "");
    let settings_element = html_element(root, "div");
    if (context.settings) {
      let settings_button = html_button_width_full_text_click(
        settings_element,
        "⚙️ settings",
        refresh_settings,
      );
      html_style_margin_x(settings_button, 0);
    }
    let verses_element = html_element(root, "div");
    let keys = keyboard_keys_rows();
    let keys_size = list_size(keys);
    let keyboard_height = multiply(context.button_height, keys_size);
    let offset = add(keyboard_height, context.settings ? 7 : 0);
    let height_max = subtract(100, offset);
    html_style(verses_element, {
      "max-height": number_to_dvh(height_max),
      "min-height": number_to_dvh(height_max),
      "overflow-y": "scroll",
    });
    let pattern_length = list_size(pattern);
    let token_count = 0;
    context.verse_elements = list_adder((la) => {
      each_index(context.group_current, (i, j) => {
        let verse = list_get(context.verses, i);
        let verse_element = html_element(verses_element, "div");
        let { tokens, verse_number } = verse;
        let number_element = html_strong_text(verse_element, verse_number);
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
            for (let s of [spacer, spacer2]) {
              html_style_hidden(s);
            }
            let token_element = html_span_text(verse_element, token);
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
    let keyboard_element = html_element(root, "div");
    html_style(keyboard_element, {
      "max-height": number_to_dvh(keyboard_height),
    });
    for (let row of keys) {
      let row_element = html_div(keyboard_element);
      html_style_centered(row_element);
      for (let k of row) {
        let b = html_button(row_element);
        object_property_set(context.keyboard_buttons, k, b);
        html_inner_set(b, string_case_upper(k));
        app_memorize_button_keyboard_stylize(context, b);
        html_on_click(b, () => {
          on_keydown(k);
        });
      }
    }
  }
  function button_keyboard_stylize(b) {
    app_memorize_button_keyboard_stylize(context, b);
  }
  html_on(root, "keydown", (e) => {
    let { keyCode } = e;
    let c = String.fromCharCode(keyCode);
    let c_lower = string_case_lower(c);
    on_keydown(c_lower);
  });
  let errored_keys = [];
  function on_keydown(k) {
    let j = list_get(context.group_current, context.verse_index);
    let current_verse = list_get(context.verses, j);
    let { tokens } = current_verse;
    let current_token = list_get(tokens, context.token_index);
    let letter_first = string_case_lower(string_letter_first(current_token));
    if (equal(k, letter_first)) {
      context.token_index++;
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
            let group_current_index = list_index(
              context.groups,
              context.group_current,
            );
            let group_next_index = add_1(group_current_index);
            let group_next = list_get(context.groups, group_next_index);
            app_memorize_group_current_set(context, group_next);
          }
        }
        refresh_memorize();
      } else {
        app_memorize_update_colors(context);
      }
      for (let errored_key of errored_keys) {
        html_style(errored_key, html_style_button_default_value());
        app_memorize_button_keyboard_stylize(context, errored_key);
      }
    } else {
      context.mistakes = true;
      html_style_visible(context.previous_token_element);
      html_style_font_color(context.previous_token_element, "red");
      let keyboard_button = object_property_get(context.keyboard_buttons, k);
      html_style_wrong(keyboard_button);
      list_add(errored_keys, keyboard_button);
    }
  }
}
