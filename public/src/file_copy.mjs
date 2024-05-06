import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
import {file_open} from './file_open.mjs';
import {assert_not_async} from './assert_not_async.mjs';
import {file_exists} from './file_exists.mjs';
export async function file_copy(file_name_from, file_name_to) {
    await assert_not_async(file_exists, [file_name_to]);
    await fs.promises.copyFile(file_name_from, file_name_to);
    await file_open(file_name_to);
}
