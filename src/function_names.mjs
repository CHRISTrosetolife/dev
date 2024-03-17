import {glob} from 'glob';
export async function function_names() {
    let prefix = `src/`;
    let files = await glob(`${prefix}**/*.mjs`);
    let mapped = list_map(files, file_path => {
        let mapped2 = string_prefix_without(file_path, prefix);
    })
    return files;
}