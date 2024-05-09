import { list_map } from "./list_map.mjs";

export function app_learn_code_review(lessons) {
    return function app_learn_code_review_inner(parent) {
        let quizzes = list_map(lessons, object_property_get(lesson, 'quiz'))
        app_learn_code_quiz_inner_refresh
    }
}
