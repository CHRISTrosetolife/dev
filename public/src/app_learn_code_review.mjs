import {app_learn_code_quiz_inner_refresh} from "./app_learn_code_quiz_inner_refresh.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {list_map} from "./list_map.mjs";
import {list_scramble} from "./list_scramble.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { noop } from "./noop.mjs";
export function app_learn_code_review(lessons) {
    return {
        description: 'module review',
        screens: [
            function app_learn_code_review_inner(parent) {
                let quizzes = list_map(lessons, lesson => object_property_get(lesson, 'quiz'));
                list_scramble(quizzes);
                quiz_next();
                function quiz_next() {
                    let quiz = list_pop(quizzes);
                    app_learn_code_quiz_inner_refresh(parent, quiz, undefined, () => {
                        if (list_empty_not_is(quizzes)) {
                            quiz_next();
                        }
                    }, noop);
                }
            }
        ]
    }
}
