import { app_language_level_size } from "./app_language_level_size.mjs";
import { app_language_title } from "./app_language_title.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { mod_last_is } from "./mod_last_is.mjs";
import { number_power } from "./number_power.mjs";
import { integer_log } from "./integer_log.mjs";
import { html_button_next_text } from "./html_button_next_text.mjs";
import { app_language_text } from "./app_language_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { app_language_atom_title_patterns } from "./app_language_atom_title_patterns.mjs";
import { html_button_width_full_text_click_alternate } from "./html_button_width_full_text_click_alternate.mjs";
import { app_language_atom_title } from "./app_language_atom_title.mjs";
import { list_get_or_last } from "./list_get_or_last.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { multiply } from "./multiply.mjs";
import { add_1 } from "./add_1.mjs";
import { divide } from "./divide.mjs";
import { each_range } from "./each_range.mjs";
import { equal_not } from "./equal_not.mjs";
import { subtract } from "./subtract.mjs";
import { app_ceb } from "./app_ceb.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { html_clear_scroll_top_centered } from "./html_clear_scroll_top_centered.mjs";
export async function app_language_refresh_node(
  context,
  refresh_review,
  refresh_learn,
  quizzes_start,
) {
  let { root, group, invert, language_fluent } = context;
  let level_size = app_language_level_size();
  html_clear_scroll_top_centered(root);
  app_language_title(context);
  let { left, right } = storage_local_get(app_ceb, "position");
  let srl = subtract(right, left);
  let j = 1;
  if (equal_not(srl, 0)) {
    each_range(level_size, (i) => {
      let factor = divide(add_1(srl), level_size);
      let m = multiply(factor, i);
      let s = subtract_1(multiply(factor, add_1(i)));
      let left_next = add(left, m);
      let right_next = add(left, s);
      let atom_left = list_get(group, left_next);
      let atom_right = list_get_or_last(group, right_next);
      let text = app_language_atom_title(group, atom_left, atom_right, invert);
      html_button_width_full_text_click_alternate(
        root,
        app_language_atom_title_patterns(),
        string_combine_multiple([j, ". ", text]),
        async function on_click() {
          storage_local_set(app_ceb, "position", {
            left: left_next,
            right: right_next,
          });
          await app_language_refresh_node(context);
        },
      );
      j++;
    });
  }
  html_button_width_full_text_click(
    root,
    "📃 " + (await app_language_text(language_fluent, "review")),
    refresh_review,
  );
  if (left === right) {
    html_button_width_full_text_click(
      root,
      string_combine_multiple([
        j++,
        ". 🎓 ",
        await app_language_text(language_fluent, "learn"),
      ]),
      () => {
        refresh_learn(0);
      },
    );
  }
  ("🟠🔵");
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      j++,
      ". 📝 quiz ( 🟢 ",
      await app_language_text(language_fluent, "easy"),
      " )",
    ]),
    () => {
      quizzes_start([3]);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      j++,
      ". 📝 quiz ( 🟡 ",
      await app_language_text(language_fluent, "medium"),
      " )",
    ]),
    () => {
      quizzes_start([2]);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      j++,
      ". 📝 quiz ( 🔴 ",
      await app_language_text(language_fluent, "hard"),
      " )",
    ]),
    () => {
      quizzes_start([1]);
    },
  );
  html_button_width_full_text_click(
    root,
    string_combine_multiple([
      j++,
      ". ",
      await app_language_text(language_fluent, html_button_next_text()),
    ]),
    () => {
      app_ceb_next();
      refresh_node();
    },
  );
  function app_ceb_next() {
    let { left, right } = storage_local_get(app_ceb, "position");
    let n = add_1(subtract(right, left));
    let count = integer_log(n, level_size);
    let level = number_power(level_size, add_1(count));
    if (mod_last_is(right, level) && equal_not(left, 0)) {
      storage_local_set(app_ceb, "position", {
        left: add_1(subtract(right, level)),
        right: right,
      });
    } else {
      let r1 = add_1(right);
      storage_local_set(app_ceb, "position", {
        left: r1,
        right: r1,
      });
    }
  }
  html_button_width_full_text_click_up(root, up_onclick);
  function up_onclick() {
    let { left, right } = storage_local_get(app_ceb, "position");
    while (true) {
      app_ceb_next();
      let { left: l, right: r } = storage_local_get(app_ceb, "position");
      if (or(equal(left, l), equal(right, r))) {
        break;
      }
    }
    refresh_node();
  }
}
