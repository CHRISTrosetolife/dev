import fs from 'fs';
export async function file_read(file_name) {
    return await fs.promises.readFile(file_name, 'utf-8');
}
