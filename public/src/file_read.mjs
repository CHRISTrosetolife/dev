import {import_node} from './import_node.mjs';let fs = await import_node('fs');
export async function file_read(file_name) {
    return await fs.promises.readFile(file_name, 'utf-8');
}
