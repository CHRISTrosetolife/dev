import { html_button } from "./html_button.mjs";
import { html_button_home } from "./html_button_home.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { html_button_me_email } from "./html_button_me_email.mjs";
import { string_delimit_double } from "./string_delimit_double.mjs";
import { html_p_text_combine } from "./html_p_text_combine.mjs";
import { html_button_begin_text } from "./html_button_begin_text.mjs";
import { html_button_begin } from "./html_button_begin.mjs";
import { string_size } from "./string_size.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { summation } from "./summation.mjs";
import { list_size } from "./list_size.mjs";
import { html_buttons_next_previous } from "./html_buttons_next_previous.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { html_style_default_font_size } from "./html_style_default_font_size.mjs";
import { html_button_width_full_text_click_alternate_code } from "./html_button_width_full_text_click_alternate_code.mjs";
import { add_1_string } from "./add_1_string.mjs";
import { app_learn_code_review } from "./app_learn_code_review.mjs";
import { app_learn_code_modules } from "./app_learn_code_modules.mjs";
import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_hash } from "./html_hash.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_multiply } from "./string_multiply.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { round } from "./round.mjs";
import { number_string_to } from "./number_string_to.mjs";
import { divide } from "./divide.mjs";
import { square } from "./square.mjs";
import { multiply } from "./multiply.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { add_1 } from "./add_1.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { html_style } from "./html_style.mjs";
import { list_add } from "./list_add.mjs";
import { html_hr } from "./html_hr.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { list_index } from "./list_index.mjs";
import { list_take } from "./list_take.mjs";
import { each_index } from "./each_index.mjs";
import { add } from "./add.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { range } from "./range.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_learn_code() {
  let root = html_style_default_initialize();
  html_style_a_plain();
  await html_scripts_load(root, ["acorn", "astring"]);
  let modules = app_learn_code_modules();
  html_hash({
    background_color: (value) => {
      html_style(root, {
        "background-color": value,
      });
    },
  });
  let default_font_size = html_style_default_font_size_value();
  html_style_default_font_size(default_font_size);
  let lesson_screens = [];
  let lessons = [];
  for (let module of modules) {
    let { lessons: module_lesson_creates } = module;
    let module_lessons = [];
    for (let lesson_create of module_lesson_creates) {
      let lesson = lesson_create();
      list_add(lessons, lesson);
      list_add(module_lessons, lesson);
      let s = object_property_get(lesson, "screens");
      list_add_multiple(lesson_screens, s);
    }
    let review = app_learn_code_review(module_lessons);
    list_add(lessons, review);
    list_add(
      lesson_screens,
      list_single(object_property_get(review, "screens")),
    );
    list_add(module_lessons, review);
    object_property_set(module, "lessons", module_lessons);
  }
  function refresh_settings() {
    html_clear_scroll_top(root);
    button_home_hr();
    let base = 16;
    let max_rgb = square(base) - 1;
    let max = 20;
    let index = 0;
    each_reverse(range(max), (i) => {
      index++;
      let percent = divide(i, subtract_1(max));
      let product = multiply(percent, max_rgb);
      let rounded = round(product);
      let rgb_part = number_string_to(rounded, base);
      if (equal(string_size(rgb_part), 1)) {
        rgb_part = string_combine("0", rgb_part);
      }
      let parts = 3;
      let rgb = string_multiply(rgb_part, parts);
      let color = string_combine("#", rgb);
      let font_color;
      if (percent > 0.5) {
        font_color = "black";
      } else {
        font_color = "white";
      }
      let change = html_button(
        root,
        string_combine_multiple([index, ".", " background color : ", color]),
        () =>
          html_style(root, {
            color: font_color,
            "background-color": color,
          }),
      );
      html_style(change, {
        color: font_color,
        "background-color": color,
      });
    });
  }
  function refresh_main() {
    html_clear_scroll_top(root);
    let begin_text_post = "";
    let begin_text = html_button_begin_text(begin_text_post);
    html_p_text_combine(root, [
      "If you want to start from the beginning, then choose ",
      string_delimit_double(begin_text),
      ": ",
    ]);
    html_button_begin(
      root,
      begin_text_post,
      async () => await refresh_lesson_screen(0),
    );
    html_p_text(root, "Otherwise, choose a module below:");
    each_index(modules, (module, index) => {
      let index_1_s = add_1_string(index);
      let { name } = module;
      html_button_width_full_text_click_alternate_code(
        root,
        string_combine_multiple([index_1_s, " : ", name]),
        () => refresh_module(module),
      );
    });
    html_hr(root);
    html_button_me_email(root);
    html_button(root, "⚙️ settings", refresh_settings);
  }
  function refresh_module(module) {
    html_clear_scroll_top(root);
    button_home_hr();
    html_p_text(root, "choose a lesson below :");
    let { lessons } = module;
    each_index(lessons, (lesson, index) => {
      let index_1_s = add_1_string(index);
      let { description } = lesson;
      function on_click() {
        refresh_lesson(lesson);
      }
      html_button_width_full_text_click_alternate_code(
        root,
        string_combine_multiple([index_1_s, " : ", description]),
        on_click,
      );
    });
  }
  refresh_main();
  let index_last = list_index_last(lesson_screens);
  function refresh_lesson(lesson) {
    html_clear_scroll_top(root);
    button_home_hr();
    html_p_text(root, "choose a screen below :");
    let lesson_index = list_index(lessons, lesson);
    let previous = list_take(lessons, lesson_index);
    let index_first = summation((s) => {
      for (let p of previous) {
        let { screens } = p;
        s(list_size(screens));
      }
    });
    let { screens } = lesson;
    each_index(screens, (screen, index) => {
      let message = string_combine("screen ", add_1(index));
      let button = html_button(
        root,
        "",
        async () => await refresh_lesson_screen(add(index_first, index)),
      );
      if (equal(index, 0)) {
        let begin_lesson = html_span_text(
          button,
          string_combine_multiple(["begin the lesson"]),
        );
        html_style_bold(begin_lesson);
        html_span_text(button, string_combine_multiple([" ( ", message, " )"]));
      } else {
        html_span_text(button, message);
      }
    });
  }
  function button_home_hr() {
    button_home();
    html_hr(root);
  }
  async function refresh_lesson_screen(index) {
    html_clear_scroll_top(root);
    let lesson_screen = list_get(lesson_screens, index);
    await lesson_screen(root);
    let on_click = refresh_lesson_screen;
    html_buttons_next_previous(root, on_click, index, index_last);
    button_home();
  }
  function button_home() {
    html_button_home(root, refresh_main);
  }
}
