import {app_code_search_function} from "./app_code_search_function.mjs";
import {function_run} from "./function_run.mjs";
import {functions_source} from "./functions_source.mjs";
import {html_style_default_initialize} from "./html_style_default_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_code() {
    html_style_default_initialize();
    let result = await function_run(functions_source.name, []);
    let files = {

    }
    let paths = object_properties(result);
    for (let p of paths) {
        let name = function_path_to_name(p);
        let value = object_property_get(result, p);
        object_property_set(files, name, {
            file_path: p,
            value
        })
    }
    let context = {
        files: result
    };
    app_code_search_function(context);
}
