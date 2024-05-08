import {app_code_search_function_generic} from "./app_code_search_function_generic.mjs";
import {app_code_backable} from "./app_code_backable.mjs";
import {app_code_edit} from "./app_code_edit.mjs";
export function app_code_search_function() {
    app_code_search_function_generic('', on_click_get);
    function on_click_get(p) {
        return () => app_code_backable(() => app_code_edit(p));
    }
}
