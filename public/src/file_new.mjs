import {assert_not_async} from "./assert_not_async.mjs";
import {file_exists} from "./file_exists.mjs";
import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
export async function file_new(file_new_name, contents) {
    await assert_not_async(file_exists, [file_new_name]);
    await fs.promises.writeFile(file_new_name, contents);
}
