import fs from 'fs';
import {newline} from './newline.mjs';
export async function file_line_append(file_new_name, line) {
    await fs.promises.appendFile(file_new_name, [newline(), line].join(''));
}
