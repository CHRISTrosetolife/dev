import fs from 'fs';
export async function file_new(file_new_name) {
    await fs.promises.writeFile(file_new_name, '');
}