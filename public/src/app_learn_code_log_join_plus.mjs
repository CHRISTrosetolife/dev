import {list_join} from "./list_join.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
export function app_learn_code_log_join_plus(list) {
    return app_learn_code_log(list_join(list, ' + '));
}
