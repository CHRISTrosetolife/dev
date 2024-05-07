import {function_paths} from "./function_paths.mjs";
import {file_read} from "./file_read.mjs";
import {promise_all} from "./promise_all.mjs";
import {list_map} from "./list_map.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function functions_source() {
    let paths = await function_paths();
    let mapped = list_map(paths, async file_path => {
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
