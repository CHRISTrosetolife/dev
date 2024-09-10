import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_memorize_group_current_set } from "./app_memorize_group_current_set.mjs";
import { list_index } from "./list_index.mjs";
import { app_memorize_groups_get } from "./app_memorize_groups_get.mjs";
import { html_hash } from "./html_hash.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_get_or } from "./object_property_get_or.mjs";
import { app_memorize_group } from "./app_memorize_group.mjs";
import { object_merge } from "./object_merge.mjs";
import { bible_engbsb_storage_http_get } from "./bible_engbsb_storage_http_get.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_div } from "./html_div.mjs";
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
import { object_property_exists } from "./object_property_exists.mjs";
export async function app_memorize_refresh_memorize(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let save = app_memorize_save_get(context);
  let book_code = object_property_initialize(save, "book_code", "JHN");
  let chapter = object_property_initialize(save, "chapter", "19");
  app_memorize_save(context);
  let load = true;
  let chapter_code = app_gs_bible_chapter_name(book_code, chapter);
  if (object_property_exists(context, chapter_code)) {
    let existing = object_property_get(context, chapter_code);
    if (chapter_code === existing) {
      load = false;
    }
  }
  object_merge(context, {
    chapter_code,
  });
  if (load) {
    let verses = await bible_engbsb_storage_http_get(chapter_code);
    object_merge(context, {
      verses,
    });
    let verses_length = list_size(context.verses);
    let groups = app_memorize_group(verses_length);
    object_merge(context, {
      groups,
    });
    context.button_height = 7;
    let group = object_property_get_or(
      save,
      "group_current",
      list_first(context.groups),
    );
    html_hash({
      verses: (value) => {
        group = app_memorize_groups_get(context, value);
      },
      pattern: (value) => {
        let save = app_memorize_save_get(context);
        save.pattern_index = list_index(context.patterns, value);
        app_memorize_save(context);
      },
    });
    app_memorize_group_current_set(context, group);
  }
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
    let settings_element = html_div(root);
    let settings_button = html_button_width_full_text_click(
      settings_element,
      "⚙️ settings",
      () => app_memorize_refresh_settings(context),
    );
    html_style_margin_x(settings_button, 0);
  }
  let verses_element = html_div(root);
  let keyboard_height = app_memorize_keyboard_height(context);
  let offset = add(keyboard_height, context.settings ? 7 : 0);
  let recent_element_offset = 4;
  offset += recent_element_offset;
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
  let recent_element = html_div(root);
  html_style_height(recent_element, number_to_dvh(recent_element_offset));
  html_style_centered(recent_element);
  html_style_bold(recent_element);
  context.recent = {
    element: recent_element,
  };
  app_memorize_keyboard(context);
}
