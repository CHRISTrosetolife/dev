import {glob} from 'glob';
export async function folder_read(folder, file_extension) {
    let files = await glob(`${folder}**/*${file_extension}`);
    return files;
}
