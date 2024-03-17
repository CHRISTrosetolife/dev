import fs from 'fs';
import { EOL } from "os";
export async function file_line_append(file_new_name, line) {
    await fs.promises.appendFile(file_new_name, '');
}