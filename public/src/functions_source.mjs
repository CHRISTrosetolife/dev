import {function_contents} from "./function_contents.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function functions_source() {
    let mapped = await function_contents();
    let result = {};
    for (let fc of mapped) {
        let {file_path, contents} = fc;
        object_property_set(result, file_path, contents);
    }
    return result;
}
