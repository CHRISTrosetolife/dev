import {each_object_async} from "./each_object_async.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {equal_not} from "./equal_not.mjs";
import {function_contents} from "./function_contents.mjs";
import { object_properties } from "./object_properties.mjs";
import { promise_all } from "./promise_all.mjs";
export async function functions_source_set(contents) {
    let existing = await function_contents();
    let keys = object_properties(contents);
    let mapped = list_map(keys, async key => {
        let value = object_property_get(contents, key);
        return await lambda(key, value)
    })
    let mapped2 = promise_all(mapped)
    async function lambda(file_path, contents) {

    }
}
