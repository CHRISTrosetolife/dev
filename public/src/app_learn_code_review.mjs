import {app_learn_code_quiz_inner_refresh} from "./app_learn_code_quiz_inner_refresh.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {list_map} from "./list_map.mjs";
import {list_scramble} from "./list_scramble.mjs";
export function app_learn_code_review(lessons) {
    return function app_learn_code_review_inner(parent) {
        let quizzes = list_map(lessons, object_property_get(lesson, 'quiz'));
        list_scramble(quizzes);
        function quiz_next() {
            app_learn_code_quiz_inner_refresh;
        }
    };
}
