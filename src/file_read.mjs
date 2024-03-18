import fs from 'fs';
export async function file_copy(file_name_from, file_name_to) {
    await fs.promises.copyFile(file_name_from, file_name_to);
}