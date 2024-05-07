import {list_reverse} from "./list_reverse.mjs";
import {folder_path_src} from "./folder_path_src.mjs";
import {list_map} from './list_map.mjs';
import {string_prefix_without} from './string_prefix_without.mjs';
import {string_suffix_without} from './string_suffix_without.mjs';
import {string_replace} from './string_replace.mjs';
import {folder_read} from './folder_read.mjs';
export async function function_names() {
    let prefix = folder_path_src();
    let suffix = '.mjs';
    let files = await folder_read(prefix, suffix);
    let mapped = list_map(files, file_path => {
        let replaced = string_replace(file_path, '\\', '/');
        let mapped2 = string_prefix_without(replaced, prefix);
        let mapped3 = string_suffix_without(mapped2, suffix);
        return mapped3;
    });
    if (false) list_reverse(mapped);
    return mapped;
}
