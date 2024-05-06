import {import_node} from './import_node.mjs';let {glob} = await import_node('glob');
export async function folder_read(folder, file_extension) {
    let files = await glob(`${folder}**/*${file_extension}`);
    return files;
}
