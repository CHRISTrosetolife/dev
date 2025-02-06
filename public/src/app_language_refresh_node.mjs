import { html_button } from "./html_button.mjs";
import { html_button_me_email } from "./html_button_me_email.mjs";
import { app_language_group_index_component } from "./app_language_group_index_component.mjs";
import { app_language_refresh_help } from "./app_language_refresh_help.mjs";
import { app_language_text_group_previous } from "./app_language_text_group_previous.mjs";
import { app_language_text_group_next } from "./app_language_text_group_next.mjs";
import { app_language_text_next } from "./app_language_text_next.mjs";
import { app_language_text_quiz } from "./app_language_text_quiz.mjs";
import { app_language_quiz_easy_very } from "./app_language_quiz_easy_very.mjs";
import { app_language_text_learn } from "./app_language_text_learn.mjs";
import { app_language_refresh_node_begin_text } from "./app_language_refresh_node_begin_text.mjs";
import { app_language_refresh_learn_0 } from "./app_language_refresh_learn_0.mjs";
import { app_language_refresh_node_left_right } from "./app_language_refresh_node_left_right.mjs";
import { html_button_begin } from "./html_button_begin.mjs";
import { list_size } from "./list_size.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
import { app_language_group_index_get } from "./app_language_group_index_get.mjs";
import { app_language_group_index_set } from "./app_language_group_index_set.mjs";
import { app_language_refresh_menu } from "./app_language_refresh_menu.mjs";
import { app_language_group_size } from "./app_language_group_size.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { app_language_quizzes_start } from "./app_language_quizzes_start.mjs";
import { app_language_refresh_review } from "./app_language_refresh_review.mjs";
import { app_language_level_size } from "./app_language_level_size.mjs";
import { app_language_title } from "./app_language_title.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { html_button_width_full_text_click_up } from "./html_button_width_full_text_click_up.mjs";
import { mod_last_is } from "./mod_last_is.mjs";
import { number_power } from "./number_power.mjs";
import { integer_log } from "./integer_log.mjs";
import { app_language_text } from "./app_language_text.mjs";
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
import { list_add } from "./list_add.mjs";
export async function app_language_refresh_node(context) {
  let { root, group, invert, language_fluent } = context;
  storage_local_set(context.app_fn, "screen", "node");
  let level_size = app_language_level_size();
  html_clear_scroll_top_centered(root);
  app_language_group_index_component(context);
  app_language_title(context);
  let { left, right } = storage_local_get(app_ceb, "position");
  let top_is = left === 0 && right === app_language_group_size() - 1;
  if (top_is) {
    html_button_begin(
      root,
      app_language_refresh_node_begin_text(),
      async () => {
        await app_language_refresh_node_left_right(context, 0, 0);
        app_language_refresh_learn_0(context);
      },
    );
  }
  html_button(root, "🛟 help", async () => {
    await app_language_refresh_help(context);
  });
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
          await app_language_refresh_node_left_right(
            context,
            left_next,
            right_next,
          );
        },
      );
      j++;
    });
  }
  html_button(
    root,
    "📃 " + (await app_language_text(language_fluent, "review")),
    () => app_language_refresh_review(context),
  );
  if (left === right) {
    html_button(
      root,
      string_combine_multiple([
        j,
        ". ",
        await app_language_text_learn(language_fluent),
      ]),
      () => {
        app_language_refresh_learn_0(context);
      },
    );
  }
  j++;
  ("🟠");
  let quizzes_list = [];
  list_add(quizzes_list, app_language_quiz_easy_very());
  list_add(quizzes_list, {
    text: "easy",
    emoji: "🟢",
    chunk_size: 3,
  });
  list_add(quizzes_list, {
    text: "medium",
    emoji: "🟡",
    chunk_size: 2,
  });
  list_add(quizzes_list, {
    text: "hard",
    emoji: "🔴",
    chunk_size: 1,
  });
  await each_async(quizzes_list, async (item) => {
    html_button(
      root,
      string_combine_multiple([
        j,
        ". ",
        await app_language_text_quiz(item, language_fluent),
      ]),
      async () => {
        await app_language_quizzes_start(context, [item.chunk_size]);
      },
    );
    j++;
  });
  if (top_is) {
    let group_index = app_language_group_index_get(context);
    if (group_index >= 1) {
      html_button(
        root,
        await app_language_text_group_previous(language_fluent),
        async () => {
          await app_language_group_index_set(context, group_index - 1);
        },
      );
    }
    let { groups } = await app_language_group_get(context, "index");
    let groups_size = list_size(groups);
    if (group_index < groups_size - 1) {
      html_button(
        root,
        await app_language_text_group_next(language_fluent),
        async () => {
          await app_language_group_index_set(context, group_index + 1);
        },
      );
    }
  } else {
    html_button(
      root,
      string_combine_multiple([
        j++,
        ". ",
        await app_language_text_next(language_fluent),
      ]),
      async () => {
        app_ceb_next();
        await app_language_refresh_node(context);
      },
    );
  }
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
  html_button_me_email(root);
  async function up_onclick() {
    if (top_is) {
      await app_language_refresh_menu(context);
      return;
    }
    let { left, right } = storage_local_get(app_ceb, "position");
    while (true) {
      app_ceb_next();
      let { left: l, right: r } = storage_local_get(app_ceb, "position");
      log({
        l,
        r,
      });
      if (or(equal(left, l), equal(right, r))) {
        break;
      }
    }
    await app_language_refresh_node(context);
  }
}
