import { list_remove_last } from "./list_remove_last.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div } from "./html_div.mjs";
import { app_learn_code_quiz_inner_refresh } from "./app_learn_code_quiz_inner_refresh.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_filter } from "./list_filter.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_add } from "./list_add.mjs";
export function app_learn_code_review(lessons) {
  let description = "module review";
  return {
    description,
    screens: [
      function app_learn_code_review_inner(parent) {
        let div = html_div(parent);
        let quiz_property = "quiz";
        let filtered = list_filter(lessons, (l) =>
          object_property_exists(l, quiz_property),
        );
        let mapped = list_map(filtered, (lesson) =>
          object_property_get(lesson, quiz_property),
        );
        let quizzes = list_filter(mapped, undefined_not_is);
        let wrongs;
        initialize();
        quiz_next();
        function initialize() {
          wrongs = [];
          list_shuffle(quizzes);
        }
        function quiz_next() {
          let quiz = list_remove_last(quizzes);
          app_learn_code_quiz_inner_refresh(
            div,
            quiz,
            undefined,
            () => {
              if (list_empty_is(quizzes)) {
                if (list_empty_is(wrongs)) {
                  html_clear(div);
                  html_p_text(
                    div,
                    string_combine("you completed the ", description),
                  );
                  return;
                } else {
                  quizzes = wrongs;
                  initialize();
                }
              }
              quiz_next();
            },
            () => {
              list_add(wrongs, quiz);
            },
          );
        }
      },
    ],
  };
}
