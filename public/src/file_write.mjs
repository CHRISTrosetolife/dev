import {assert_not_async} from './assert_not_async.mjs';
import {file_exists} from './file_exists.mjs';
import {file_overwrite} from './file_overwrite.mjs';
export async function file_write(file_name, data) {
    if (web_is()) {
        let {files} = global_get();
        let keys = object_properties(files);
        return list_includes(keys, file_name);
    }
    await assert_not_async(file_exists, [file_name]);
    return await file_overwrite(file_name, data);
}
