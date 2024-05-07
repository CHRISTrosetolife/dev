import {object_property_exists} from "./object_property_exists.mjs";
import {list_map} from "./list_map.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {function_contents} from "./function_contents.mjs";
import {object_properties} from "./object_properties.mjs";
import {promise_all} from "./promise_all.mjs";
export async function functions_source_set(contents) {
    let existing = await function_contents();
    let keys = object_properties(contents);
    let mapped = list_map(keys, async key => {
        let value = object_property_get(contents, key);
        return await lambda(key, value);
    });
    let mapped2 = await promise_all(mapped);
    async function lambda(file_path, contents) {
        if (object_property_exists(existing, file_path)) {
            let contents_existing = object_property_get(existing, file_path);
        }
    }
}
