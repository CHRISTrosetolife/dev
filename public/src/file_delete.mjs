import fs from 'fs';
export async function file_delete(file_name) {
    return await fs.promises.rm(file_name);
}
