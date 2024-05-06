import import_await from './import_await.mjs';let fs = await import_await('fs','fs');
import {newline} from './newline.mjs';
export async function file_line_prepend(file_new_name, line) {
    await fs.promises.appendFile(file_new_name, [line, newline()].join(''));
}
