import fs from 'fs';
export async function file_new(file_new_name) {
    let args = '';
    await fs.promises.writeFile(file_new_name, '');
}