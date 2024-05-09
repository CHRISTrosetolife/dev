import {list_empty_is} from "./list_empty_is.mjs";
import {html_div} from "./html_div.mjs";
import {app_learn_code_quiz_inner_refresh} from "./app_learn_code_quiz_inner_refresh.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {list_map} from "./list_map.mjs";
import {list_scramble} from "./list_scramble.mjs";
import {list_pop} from "./list_pop.mjs";
import {noop} from "./noop.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {string_combine} from "./string_combine.mjs";
export function app_learn_code_review(lessons) {
    let description = 'module review';
    return {
        description,
        screens: [function app_learn_code_review_inner(parent) {
            let div = html_div(parent);
            let quizzes = list_map(lessons, lesson => object_property_get(lesson, 'quiz'));
            let wrongs = [];
            list_scramble(quizzes);
            quiz_next();
            function quiz_next() {
                let quiz = list_pop(quizzes);
                app_learn_code_quiz_inner_refresh(div, quiz, undefined, () => {
                    if (list_empty_is(quizzes)) {
                        html_p_text(string_combine('you completed the ', description));
                    } else {
                        quiz_next();
                    }
                }, noop);
            }
        }]
    };
}
