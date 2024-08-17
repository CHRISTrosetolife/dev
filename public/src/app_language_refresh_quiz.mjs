import { list_without } from "./list_without.mjs";
import { json_to } from "./json_to.mjs";
import { list_without_by } from "./list_without_by.mjs";
import { equal_json } from "./equal_json.mjs";
import { date_string_iso } from "./date_string_iso.mjs";
import { list_after_json } from "./list_after_json.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_style_visible } from "./html_style_visible.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_flag } from "./html_flag.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { app_language_refresh_node } from "./app_language_refresh_node.mjs";
import { app_language_atoms_slice_concat } from "./app_language_atoms_slice_concat.mjs";
import { html_button_disable } from "./html_button_disable.mjs";
import { html_style_font_color_default_set } from "./html_style_font_color_default_set.mjs";
import { html_enable } from "./html_enable.mjs";
import { html_attribute_has } from "./html_attribute_has.mjs";
import { app_language_alternatives_partial_matches_nexts } from "./app_language_alternatives_partial_matches_nexts.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { html_spacer_vertical_2 } from "./html_spacer_vertical_2.mjs";
import { html_style_click_width_min } from "./html_style_click_width_min.mjs";
import { object_copy_shallow } from "./object_copy_shallow.mjs";
import { list_add } from "./list_add.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { list_last } from "./list_last.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { string_take } from "./string_take.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { number_min } from "./number_min.mjs";
import { string_length } from "./string_length.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { add_1 } from "./add_1.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { html_disable } from "./html_disable.mjs";
import { equal } from "./equal.mjs";
import { app_language_correct_get } from "./app_language_correct_get.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_copy } from "./list_copy.mjs";
import { string_chunk } from "./string_chunk.mjs";
import { html_style_button_default_background_color } from "./html_style_button_default_background_color.mjs";
import { html_style_border_color } from "./html_style_border_color.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { html_element_style } from "./html_element_style.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_display_inline_block } from "./html_style_display_inline_block.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_p } from "./html_p.mjs";
import { equal_1 } from "./equal_1.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { app_language_text } from "./app_language_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_first } from "./list_first.mjs";
import { app_language_word_native } from "./app_language_word_native.mjs";
import { list_second } from "./list_second.mjs";
import { app_language_word_button } from "./app_language_word_button.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_includes } from "./list_includes.mjs";
import { or } from "./or.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export async function app_language_refresh_quiz(context) {
  let {
    root,
    app_fn,
    language_learn,
    language_fluent,
    group,
    definitions,
    inverted,
  } = context;
  storage_local_set(context.app_fn, "screen", "quiz");
  let settings_choices = storage_local_get(
    context.app_fn,
    "quiz_settings_choices",
  );
  let settings = storage_local_get(context.app_fn, "quiz_settings");
  html_clear_scroll_top_centered(root);
  let no_mistakes = true;
  let { pair, chunk_size, forwards } = settings;
  assert(number_is, [chunk_size]);
  let concat = app_language_atoms_slice_concat(app_fn, group);
  let pairs_other = list_without_by(concat, pair, json_to);
  let [word_f, word_t] = pair;
  if (0) {
    [word_f, word_t] = ["gikan", "from"];
  }
  let alternatives_t = list_without(
    object_property_get(definitions, word_f),
    word_t,
  );
  let alternatives_f = list_without(
    object_property_get(inverted, word_t),
    word_f,
  );
  pairs_other = list_filter(pairs_other, (po) => {
    let [f, t] = po;
    if (
      or(list_includes(alternatives_f, f), list_includes(alternatives_t, t))
    ) {
      return false;
    }
    return true;
  });
  let answer;
  let pair_other = list_random_item(pairs_other);
  if (0) {
    pair_other = ["ila", "acknowledge"];
  }
  let answer_other_get;
  let alternatives;
  if (forwards) {
    app_language_word_button(root, language_learn, word_f);
    answer = word_t;
    answer_other_get = list_second;
    alternatives = alternatives_t;
  } else {
    app_language_word_native(root, word_t);
    answer = word_f;
    answer_other_get = list_first;
    alternatives = alternatives_f;
  }
  let quiz_container;
  let button_ready = html_button_width_full_text_click(
    root,
    " 🏁 " + (await app_language_text(language_fluent, "ready")),
    () => {
      html_style_display_none(button_ready);
      html_style_display_block(quiz_container);
    },
  );
  html_flag(button_ready, app_language_flag_answer());
  quiz_container = html_div(root);
  let component_display_none;
  if (true || equal_1(chunk_size)) {
    component_display_none = quiz_container;
  } else {
    component_display_none = button_ready;
  }
  html_style_display_none(component_display_none);
  let answer_other = answer_other_get(pair_other);
  let answer_element = html_p(quiz_container);
  let span_success = html_span(answer_element);
  html_flag(answer_element, app_language_flag_answer());
  html_span_text(answer_element, " ");
  let answer_element_left = html_span(answer_element);
  let answer_element_right = html_span_text(answer_element, "?");
  html_style_display_inline_block(answer_element_right);
  html_style_bold(answer_element_left);
  let style = html_element_style(answer_element);
  html_style_default_border_margin(style);
  html_style_width_full(answer_element);
  html_style_border_color(
    answer_element,
    html_style_button_default_background_color(),
  );
  let index = 0;
  let correct_choices = string_chunk(answer, chunk_size);
  let other_choices = string_chunk(answer_other, chunk_size);
  let choices = list_copy(correct_choices);
  list_add_multiple(choices, other_choices);
  list_shuffle(choices);
  choices = list_map(choices, string_case_lower);
  let next_button;
  let buttons = list_adder((la) => {
    each(choices, (choice) => {
      let button = html_button_text_click(quiz_container, choice, () => {
        let correct = app_language_correct_get(answer, chunk_size, index);
        if (equal(choice, correct)) {
          html_disable(button);
          each(list_map_property(buttons, "button"), html_style_button_default);
          index = add_1(index);
          update_partials();
          let take_count = number_min(
            multiply(index, chunk_size),
            string_length(answer),
          );
          html_inner_set(answer_element_left, string_take(answer, take_count));
          let last_is = greater_than_equal(
            multiply(index, chunk_size),
            string_length(answer),
          );
          if (last_is) {
            html_inner_set(span_success, "✅ ");
            html_style_display_none(answer_element_right);
            html_style_success(answer_element);
            html_style_hidden(button);
            html_style_visible(next_button);
            each(list_map_property(buttons, "button"), html_style_hidden);
          }
          html_style_success(button);
          update_partials();
          app_learn_code_correct_timeout(async () => {
            html_style_hidden(button);
            if (last_is) {
              html_style_success(answer_element);
              await app_language_audio(language_learn, word_f);
              let settings2 = storage_local_get(
                context.app_fn,
                "quiz_settings",
              );
              if (equal_json(settings, settings2)) {
                await next();
              }
            }
          });
        } else {
          html_style_wrong(button);
          if (no_mistakes) {
            let copy = object_copy_shallow(settings);
            copy.when = date_string_iso();
            list_add(settings_choices, copy);
            storage_local_set(
              context.app_fn,
              "quiz_settings_choices",
              settings_choices,
            );
            no_mistakes = false;
          }
        }
      });
      la({
        button,
        choice,
      });
      html_style_click_width_min(button);
    });
  });
  next_button = html_button_width_full_text_click_next(root, next);
  html_style_hidden(next_button);
  update_partials();
  html_spacer_vertical_2(root);
  html_button_width_full_text_click_up(root, async () => {
    await app_language_refresh_node(context);
  });
  function app_language_flag_answer() {
    return forwards ? "us" : "ph";
  }
  async function next() {
    if (equal_json(settings, list_last(settings_choices))) {
      await app_language_refresh_node(context);
    } else {
      let after = list_after_json(settings_choices, settings);
      storage_local_set(context.app_fn, "quiz_settings", after);
      await app_language_refresh_quiz(context);
    }
  }
  function update_partials() {
    let nexts = app_language_alternatives_partial_matches_nexts(
      answer,
      chunk_size,
      index,
      alternatives,
    );
    each(buttons, (b) => {
      let { button, choice } = b;
      let disabled_is = html_attribute_has(button, "disabled");
      if (disabled_is) {
        html_enable(button);
        html_style_button_default(button);
        html_style_font_color_default_set(button);
      }
      if (list_includes(nexts, choice)) {
        html_button_disable(button);
      }
    });
  }
}
