import fs from 'fs';
import {file_open} from './file_open.mjs';
export async function file_copy(file_name_from, file_name_to) {
  await fs.promises.copyFile(file_name_from, file_name_to);
  await file_open(file_name_to);
}
