import {import_node} from './import_node.mjs';
let fs = await import_node('fs');
export async function file_rename(file_name_from, file_name_to) {
    await fs.promises.rename(file_name_from, file_name_to);
}
