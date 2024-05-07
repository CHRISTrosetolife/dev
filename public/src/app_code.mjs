import {app_code_search_function} from "./app_code_search_function.mjs";
import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
export async function app_code() {
    html_style_default_initialize();
    let files = await function_run(functions_source.name, []);
    let context = {
        files
    };
    app_code_search_function(root, context);
}
