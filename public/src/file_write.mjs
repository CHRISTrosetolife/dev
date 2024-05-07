import {assert_not_async} from './assert_not_async.mjs';
import {file_exists} from './file_exists.mjs';
import {file_overwrite} from './file_overwrite.mjs';
export async function file_write(file_name, data) {
    await assert_not_async(file_exists, [file_name]);
    return await file_overwrite(file_name, data);
}
