import {assert_not_async} from "./assert_not_async.mjs";
import {file_exists} from "./file_exists.mjs";
import {import_node} from './import_node.mjs';let fs = await import_node('fs');
export async function file_new(file_new_name, contents) {
    await assert_not_async(file_exists, [file_new_name]);
    await fs.promises.writeFile(file_new_name, contents);
}
