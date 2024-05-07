import { each_object } from "./each_object.mjs";
import { equal_not } from "./equal_not.mjs";
import {function_contents} from "./function_contents.mjs";
import {object_property_set} from "./object_property_set.mjs";
export async function functions_source_set(contents) {
    let existing = await function_contents();
    each_object(contents, (file_path, contents_new) => {
        let contents_existing = object_property_get(existing, file_path);
        if (equal_not(contents_new, contents_existing)) {

        }
    })
}
