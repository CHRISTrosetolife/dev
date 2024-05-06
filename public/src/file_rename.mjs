import fs from 'fs';
export async function file_rename(file_name_from, file_name_to) {
    await fs.promises.rename(file_name_from, file_name_to);
}
