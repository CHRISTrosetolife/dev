import {app_learn_code_quiz_inner} from "./app_learn_code_quiz_inner.mjs";
export function app_learn_code_quiz(parent, source_get) {
    return () => app_learn_code_quiz_inner(parent, source_get);
}
