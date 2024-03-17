import fs from 'fs';
export async function file_empty(file_new_name) {
    await fs.promises.writeFile(file_new_name, '');
}