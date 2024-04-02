import fs from 'fs';
import assert from './assert.mjs';
export async function file_write(file_name, data) {
    assert(true);
    return await fs.promises.writeFile(file_name, data, 'utf-8');
}