import {app_code_edit} from "./app_code_edit.mjs";
import {html_hash} from "./html_hash.mjs";
import {app_code_search_function} from "./app_code_search_function.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
export async function app_code() {
    html_style_default_initialize();
    let files = await function_run(functions_source.name, []);
    let context = {
        files
    };
    html_hash({
        'function_name': function_name => {
            let p = function_name_to_path(function_name);
            app_code_edit(context, p);
        }
    });
    app_code_search_function(context);
}
