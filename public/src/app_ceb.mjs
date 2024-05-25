import { string_index_last } from "./string_index_last.mjs";
import { string_substring } from "./string_substring.mjs";
import { html_merge } from "./html_merge.mjs";
import { and } from "./and.mjs";
import { html_style_hidden } from "./html_style_hidden.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_to_letters } from "./list_to_letters.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { list_get_or_last } from "./list_get_or_last.mjs";
import { or } from "./or.mjs";
import { number_power } from "./number_power.mjs";
import { integer_log } from "./integer_log.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_slice } from "./list_slice.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
import { html_style_alternate_short_p } from "./html_style_alternate_short_p.mjs";
import { app_ceb_atom_title_patterns } from "./app_ceb_atom_title_patterns.mjs";
import { app_ceb_atom_title } from "./app_ceb_atom_title.mjs";
import { app_ceb_level_size } from "./app_ceb_level_size.mjs";
import { each_range } from "./each_range.mjs";
import { add } from "./add.mjs";
import { mod_last_is } from "./mod_last_is.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_button_width_full_text_click_alternate_short } from "./html_button_width_full_text_click_alternate_short.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_button_default } from "./html_style_button_default.mjs";
import { html_style_wrong } from "./html_style_wrong.mjs";
import { object_copy_shallow } from "./object_copy_shallow.mjs";
import { list_last } from "./list_last.mjs";
import { html_style_display_block } from "./html_style_display_block.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_ceb_quiz_settings } from "./app_ceb_quiz_settings.mjs";
import { html_div } from "./html_div.mjs";
import { list_without } from "./list_without.mjs";
import { app_ceb_audio } from "./app_ceb_audio.mjs";
import { app_ceb_word_english } from "./app_ceb_word_english.mjs";
import { list_after } from "./list_after.mjs";
import { number_is } from "./number_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { html_element_style } from "./html_element_style.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { app_learn_code_correct_timeout } from "./app_learn_code_correct_timeout.mjs";
import { app_learn_code_style_success } from "./app_learn_code_style_success.mjs";
import { html_style_display_none } from "./html_style_display_none.mjs";
import { html_style_click_width_min } from "./html_style_click_width_min.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { string_chunk } from "./string_chunk.mjs";
import { app_ceb_word_button } from "./app_ceb_word_button.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { list_scramble } from "./list_scramble.mjs";
import { http_storage } from "./http_storage.mjs";
import { ceb_group_path } from "./ceb_group_path.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { string_take } from "./string_take.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_length } from "./string_length.mjs";
import { list_second } from "./list_second.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { assert } from "./assert.mjs";
import { multiply } from "./multiply.mjs";
import { number_min } from "./number_min.mjs";
import { html_style } from "./html_style.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { list_length } from "./list_length.mjs";
import { equal_1 } from "./equal_1.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { list_add } from "./list_add.mjs";
import { list_adder } from "./list_adder.mjs";
import { subtract } from "./subtract.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { divide } from "./divide.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_copy } from "./list_copy.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function app_ceb() {
  let root = html_style_default_initialize();
  let group_index = 0;
  let { group, definitions, inverted } = await http_storage(
    ceb_group_path(group_index),
  );
  let level_size = app_ceb_level_size();
  let settings_choices;
  let position = {
    left: 0,
    right: 0,
  };
  position = {
    left: 4,
    right: 5,
  };
  refresh_node();
  function refresh_node() {
    html_clear_scroll_top_centered(root);
    app_ceb_title();
    let { left, right } = position;
    const srl = subtract(right, left);
    if (equal_not(srl, 0)) {
      each_range(level_size, (i) => {
        let factor = divide(add_1(srl), level_size);
        let m = multiply(factor, i);
        let s = subtract_1(multiply(factor, add_1(i)));
        let left_next = add(left, m);
        let right_next = add(left, s);
        let atom_left = list_get(group, left_next);
        let atom_right = list_get_or_last(group, right_next);
        let text = app_ceb_atom_title(group, atom_left, atom_right);
        html_button_width_full_text_click_alternate_short(
          root,
          app_ceb_atom_title_patterns(),
          string_combine_multiple([add_1(i), ". ", text]),
          function on_click() {
            position = {
              left: left_next,
              right: right_next,
            };
            refresh_node();
          },
        );
      });
    }
    app_ceb_learn();
    html_button_width_full_text_click_next(root, () => {
      app_ceb_next();
      refresh_node();
    });
    function app_ceb_next() {
      let { left, right } = position;
      let n = add_1(subtract(right, left));
      let count = integer_log(n, level_size);
      let level = number_power(level_size, add_1(count));
      if (mod_last_is(right, level) && equal_not(left, 0)) {
        position = {
          left: add_1(subtract(right, level)),
          right: right,
        };
      } else {
        const r1 = add_1(right);
        position = {
          left: r1,
          right: r1,
        };
      }
    }
    html_button_width_full_text_click_up(root, up_onclick);
    function up_onclick() {
      let { left, right } = position;
      while (true) {
        app_ceb_next();
        let { left: l, right: r } = position;
        if (or(equal(left, l), equal(right, r))) {
          break;
        }
      }
      refresh_node();
    }
  }
  function app_ceb_learn() {
    html_button_width_full_text_click(root, "🎓 learn", () => {
      refresh_pair(0);
    });
    ("🟠🔵");
    html_button_width_full_text_click(root, "📝 quiz ( 🟢 easy )", () => {
      quizzes_start([3]);
    });
    html_button_width_full_text_click(root, "📝 quiz ( 🟡 medium )", () => {
      quizzes_start([2]);
    });
    html_button_width_full_text_click(root, "📝 quiz ( 🔴 hard )", () => {
      quizzes_start([1]);
    });
  }
  function app_ceb_title() {
    let { left, right } = position;
    let gl = list_get(group, left);
    let gr = list_get_or_last(group, right);
    let text = app_ceb_atom_title(group, gl, gr);
    html_style_alternate_short_p(root, app_ceb_atom_title_patterns(), text);
  }
  function refresh_quiz(settings) {
    html_clear_scroll_top_centered(root);
    let no_mistakes = true;
    let { pair, chunk_size, forwards } = settings;
    assert(number_is, [chunk_size]);
    let concat = atoms_slice_concat();
    let pairs_other = list_without(concat, pair);
    let [cebuano, english] = pair;
    let english_alternatives = list_without(
      object_property_get(definitions, cebuano),
      english,
    );
    const english_letters = string_split_empty(english);
    let letters_english_forbidden = list_difference(
      list_to_letters(english_alternatives),
      english_letters,
    );
    let cebuano_alternatives = list_without(
      object_property_get(inverted, english),
      cebuano,
    );
    const cebuano_letters = string_split_empty(cebuano);
    let letters_cebuano_forbidden = list_difference(
      list_to_letters(cebuano_alternatives),
      cebuano_letters,
    );
    pairs_other = list_filter(pairs_other, (p) => {
      let [c, e] = p;
      if (
        or(
          list_includes(cebuano_alternatives, c),
          list_includes(english_alternatives, e),
        )
      ) {
        return false;
      }
      if (0)
        if (
          or(
            list_empty_not_is(
              list_intersect(letters_cebuano_forbidden, string_split_empty(c)),
            ),
            list_empty_not_is(
              list_intersect(letters_english_forbidden, string_split_empty(e)),
            ),
          )
        ) {
          return false;
        }
      return true;
    });
    let answer;
    let pair_other = list_random_item(pairs_other);
    pair_other = [cebuano, list_random_item(definitions[cebuano])];
    let answer_other_get;
    let alternatives;
    if (forwards) {
      app_ceb_word_button(root, cebuano);
      answer = english;
      answer_other_get = list_second;
      alternatives = english_alternatives;
    } else {
      app_ceb_word_english(root, english);
      answer = cebuano;
      answer_other_get = list_first;
      alternatives = cebuano_alternatives;
    }
    let quiz_container;
    let button_ready = html_button_width_full_text_click(
      root,
      "🏁 ready",
      () => {
        html_style_display_none(button_ready);
        html_style_display_block(quiz_container);
      },
    );
    quiz_container = html_div(root);
    let component_display_none;
    if (equal_1(chunk_size)) {
      component_display_none = quiz_container;
    } else {
      component_display_none = button_ready;
    }
    html_style_display_none(component_display_none);
    let answer_other = answer_other_get(pair_other);
    let answer_element = html_p_text(quiz_container, "?");
    html_style_bold(answer_element);
    let style = html_element_style(answer_element);
    html_style_default_border_margin(style);
    html_style_width_full(answer_element);
    html_style(answer_element, {
      "border-color": "lightblue",
    });
    let index = 0;
    let correct_choices = string_chunk(answer, chunk_size);
    let other_choices = string_chunk(answer_other, chunk_size);
    let choices = list_copy(correct_choices);
    list_add_multiple(choices, other_choices);
    list_scramble(choices);
    choices = list_map(choices, string_case_lower);
    let buttons = list_adder((la) => {
      each(choices, (choice) => {
        let button = html_button_text_click(quiz_container, choice, () => {
          let answer_partial = string_take(answer, index * chunk_size);
          let alternatives_partial_matches = list_filter(alternatives, (a) =>
            and(
              string_starts_with(a, answer_partial),
              greater_than(string_length(a), index),
            ),
          );
          let alternatives_partial_matches_nexts = list_map(
            alternatives_partial_matches,
            (a) =>
              string_substring(
                a,
                index,
                add(
                  index,
                  number_min(chunk_size, string_index_last(a) - index),
                ),
              ),
          );
          each(buttons, (b) => {
            let { button } = b;
            let { element } = button;
            element.removeAttribute("disabled");
            if (list_includes(alternatives_partial_matches_nexts, b.choice)) {
              html_merge(button, {
                disabled: "disabled",
              });
            }
          });
          let correct = string_case_lower(list_get(correct_choices, index));
          if (equal(choice, correct)) {
            each(
              list_map_property(buttons, "button"),
              html_style_button_default,
            );
            index = add_1(index);
            const last_is = greater_than_equal(
              multiply(index, chunk_size),
              string_length(answer),
            );
            let last = last_is ? "" : "?";
            const take_count = number_min(
              multiply(index, chunk_size),
              string_length(answer),
            );
            html_inner_set(
              answer_element,
              string_combine(string_take(answer, take_count), last),
            );
            if (last_is) {
              app_learn_code_style_success(answer_element);
              html_style_hidden(button);
            }
            app_learn_code_style_success(button);
            app_learn_code_correct_timeout(async () => {
              html_style_hidden(button);
              if (last_is) {
                app_learn_code_style_success(answer_element);
                await app_ceb_audio(cebuano);
                if (equal(settings, list_last(settings_choices))) {
                  refresh_node();
                } else {
                  let after = list_after(settings_choices, settings);
                  refresh_quiz(after);
                }
              }
            });
          } else {
            html_style_wrong(button);
            if (no_mistakes) {
              list_add(settings_choices, object_copy_shallow(settings));
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
    html_button_width_full_text_click_up(root, refresh_node);
  }
  async function refresh_pair(pair_index) {
    html_clear_scroll_top_centered(root);
    let concat = atoms_slice_concat();
    let pair = list_get(concat, pair_index);
    let [cebuano, english] = pair;
    app_ceb_word_button(root, cebuano);
    app_ceb_word_english(root, english);
    html_buttons_next_previous(
      root,
      (pair_index) => {
        if (greater_than(pair_index, list_index_last(concat))) {
          refresh_node();
        } else {
          refresh_pair(pair_index);
        }
      },
      pair_index,
      list_length(concat),
    );
    html_button_width_full_text_click_up(root, refresh_node);
  }
  function atoms_slice_concat() {
    let atoms = atoms_slice();
    let concat = list_concat_multiple(atoms);
    return concat;
  }
  function quizzes_start(chunk_sizes) {
    let atoms = atoms_slice();
    settings_choices = app_ceb_quiz_settings(atoms, chunk_sizes);
    refresh_quiz(list_first(settings_choices));
  }
  function atoms_slice() {
    let { left, right } = position;
    let atoms = list_slice(group, left, add_1(right));
    return atoms;
  }
}
