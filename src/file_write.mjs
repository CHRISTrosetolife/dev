import fs from 'fs';
export async function file_write(file_name, data) {
    return await fs.promises.writeFile(file_name, data, 'utf-8');
}