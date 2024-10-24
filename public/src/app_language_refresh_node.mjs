import { app_language_text_group_next } from "./app_language_text_group_next.mjs";
import { app_language_text_group } from "./app_language_text_group.mjs";
import { app_language_text_next } from "./app_language_text_next.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { app_language_refresh_quiz_text_ready } from "./app_language_refresh_quiz_text_ready.mjs";
import { app_language_text_quiz } from "./app_language_text_quiz.mjs";
import { app_language_quiz_easy_very } from "./app_language_quiz_easy_very.mjs";
import { app_language_text_learn } from "./app_language_text_learn.mjs";
import { app_language_refresh_node_begin_text } from "./app_language_refresh_node_begin_text.mjs";
import { html_button_begin_text } from "./html_button_begin_text.mjs";
import { app_language_refresh_learn_0 } from "./app_language_refresh_learn_0.mjs";
import { app_language_atom_size } from "./app_language_atom_size.mjs";
import { app_language_refresh_node_left_right } from "./app_language_refresh_node_left_right.mjs";
import { html_button_begin } from "./html_button_begin.mjs";
import { me_email } from "./me_email.mjs";
import { html_style_email } from "./html_style_email.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { list_size } from "./list_size.mjs";
import { app_language_group_get } from "./app_language_group_get.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
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
import { list_add } from "./list_add.mjs";
export async function app_language_refresh_node(context) {
  let { root, group, invert, language_fluent } = context;
  storage_local_set(context.app_fn, "screen", "node");
  let level_size = app_language_level_size();
  html_clear_scroll_top_centered(root);
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
  html_button_width_full_text_click(root, "🛟 help", async () => {
    let atom_size = app_language_atom_size();
    let group_pair_count = app_language_group_size() * atom_size;
    html_clear_scroll_top_centered(root);
    let paragraphs = [
      "This app teaches Cebuano.",
      "This app teaches vocabularly words.",
      string_combine_multiple([
        "If this is the first time you are using this app, then, to get started, tap or click this button: ",
        html_button_begin_text(app_language_refresh_node_begin_text()),
      ]),
      string_combine_multiple([
        "Then, you will read the first ",
        atom_size,
        " words and their definitions.",
      ]),
      string_combine_multiple([
        "If you want to read the words and their definitions again before being quizzed, then tap or click: ",
        await app_language_text_learn(language_fluent),
      ]),
      string_combine_multiple([
        "Then, when you are ready to be quizzed on these ",
        atom_size,
        " words, tap or click: ",
        await app_language_text_quiz(
          app_language_quiz_easy_very(),
          language_fluent,
        ),
      ]),
      string_combine_multiple([
        "While you are quizzing, first, you will see a word. Try to remember the translation of the word and how to spell it. Remembering like this will help you learn the words. Then, once you have tried to remember the translation, choose: ",
        await app_language_refresh_quiz_text_ready(language_fluent),
        ". Then the choices will appear. Choose the correct choice.",
      ]),
      "It is recommended to keep quizzing until you are comfortable with all of the words and their definitions.",
      "The other quiz difficulties will test you on the spelling of the words.",
      "It is okay to completely skip these difficulties.",
      string_combine_multiple([
        "Once you have learned the first ",
        atom_size,
        " words, then choose: ",
        await app_language_text_next(language_fluent),
      ]),
      string_combine_multiple([
        "Then, you can learn and quiz on the second ",
        atom_size,
        " words, just like you did on the first ",
        atom_size,
        " words.",
      ]),
      string_combine_multiple([
        "Once you have learned the second ",
        atom_size,
        " words, then choose: ",
        await app_language_text_next(language_fluent),
      ]),
      string_combine_multiple([
        "Then, you can quiz on the first ",
        atom_size * 2,
        " words ",
        atom_size,
        " as a review.",
      ]),
      string_combine_multiple([
        "Then, you continue to learn, quiz and next until you are reviewing ",
        group_pair_count,
        " words at once. This will be your first group of ",
        group_pair_count,
        " words.",
      ]),
      string_combine_multiple([
        "Once you have completed your first group of ",
        group_pair_count,
        " words, then choose: ",
        await app_language_text_group_next(language_fluent),
      ]),
    ];
    each(paragraphs, (p) => {
      html_p_text(root, p);
    });
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
  html_button_width_full_text_click(
    root,
    "📃 " + (await app_language_text(language_fluent, "review")),
    () => app_language_refresh_review(context),
  );
  if (left === right) {
    html_button_width_full_text_click(
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
    html_button_width_full_text_click(
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
      html_button_width_full_text_click(
        root,
        string_combine_multiple([
          await app_language_text(language_fluent, html_button_previous_text()),
          app_language_text_group(),
        ]),
        async () => {
          await app_language_group_index_set(context, group_index - 1);
        },
      );
    }
    let { groups } = await app_language_group_get(context, "index");
    let groups_size = list_size(groups);
    if (group_index < groups_size - 1) {
      html_button_width_full_text_click(
        root,
        await app_language_text_group_next(language_fluent),
        async () => {
          await app_language_group_index_set(context, group_index + 1);
        },
      );
    }
  } else {
    html_button_width_full_text_click(
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
  let email_button = html_button_width_full_text(
    root,
    "📨 contact developer email",
  );
  html_style_email(me_email())(email_button);
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
