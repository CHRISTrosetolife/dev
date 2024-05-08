import {import_node} from './import_node.mjs';
import {file_open} from './file_open.mjs';
import {assert_not_async} from './assert_not_async.mjs';
import {file_exists} from './file_exists.mjs';
import { web_is } from './web_is.mjs';
import { global_get } from './global_get.mjs';
import { object_property_get } from './object_property_get.mjs';
import { object_property_set } from './object_property_set.mjs';
export async function file_copy(file_name_from, file_name_to) {
    await assert_not_async(file_exists, [file_name_to]);
    if (web_is()) {
        let {files} = global_get()
        let existing = object_property_get(files, file_name_from);
        object_property_set(files, file_name_to, existing)
    }
    let fs = await import_node('fs');
    await fs.promises.copyFile(file_name_from, file_name_to);
    await file_open(file_name_to);
}
