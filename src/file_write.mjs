
import {assert} from './assert.mjs';
import {file_exists} from './file_exists.mjs';
import {file_overwrite} from './file_overwrite.mjs';
export async function file_write(file_name, data) {
    assert(!file_exists(file_name));
    return await file_overwrite(file_name, data);
}


