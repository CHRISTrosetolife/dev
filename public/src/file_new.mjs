import {assert_async} from "./assert_async.mjs";
import {file_exists} from "./file_exists.mjs";
import fs from 'fs';
export async function file_new(file_new_name, contents) {
    await assert_async(file_exists, [file_new_name]);
    await fs.promises.writeFile(file_new_name, contents);
}
