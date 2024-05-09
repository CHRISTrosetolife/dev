import { list_map } from "./list_map.mjs";
import { list_scramble } from "./list_scramble.mjs";

export function app_learn_code_review(lessons) {
    return function app_learn_code_review_inner(parent) {
        let quizzes = list_map(lessons, object_property_get(lesson, 'quiz'))
        list_scramble(quizzes);
        app_learn_code_quiz_inner_refresh
    }
}
