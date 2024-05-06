import {import_node} from './import_node.mjs';let fs = await import_node('fs');
export async function file_overwrite(file_name, data) {
    return await fs.promises.writeFile(file_name, data, 'utf-8');
}
