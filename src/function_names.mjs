import {glob} from 'glob';
export async function function_names() {
    let prefix = `src/`;
    let suffix = '.mjs';
    let files = await glob(`${prefix}**/*${suffix}`);
    let mapped = list_map(files, file_path => {
        let mapped2 = string_prefix_without(file_path, prefix);
        let mapped3 = string_suffix_without(mapped2, suffix);
        return mapped3;
    })
    return mapped;
}