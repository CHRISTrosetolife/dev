import {import_node} from './import_node.mjs';let fs = await import_node('fs');
export async function file_delete(file_name) {
    return await fs.promises.rm(file_name);
}
