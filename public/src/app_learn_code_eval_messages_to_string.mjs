import {list_join} from "./list_join.mjs";
export function app_learn_code_eval_messages_to_string(messages) {
    return list_join(messages, '<br>');
}
