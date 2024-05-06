import {file_read} from "./file_read.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
import {promise_all} from "./promise_all.mjs";
import {function_names} from "./function_names.mjs";
import {list_map} from "./list_map.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function functions_source() {
    let names = await function_names();
    let mapped = list_map(names, async n => {
        let file_path = function_name_to_path(n);
        return {
            file_path,
            contents: await file_read(file_path)
        };
    });
    await promise_all(mapped);
    let result = {};
    for (let fc of mapped) {
        let {file_path, contents} = await fc;
        object_property_set(result, file_path, contents);
    }
    return result;
}
