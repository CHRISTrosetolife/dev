import fs from 'fs';
import {assert} from './assert.mjs';
import {file_exists} from './file_exists.mjs';
export async function file_write(file_name, data) {
    assert(!file_exists(file_name));
    return await file_overwrite(file_name, data);
}

async function file_overwrite(file_name, data) {
    return await fs.promises.writeFile(file_name, data, 'utf-8');
}
