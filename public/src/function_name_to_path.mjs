import {folder_path_src} from "./folder_path_src.mjs";
import {function_extension} from './function_extension.mjs';
import {string_combine_multiple} from './string_combine_multiple.mjs';
export function function_name_to_path(function_name) {
    return string_combine_multiple([`./${folder_path_src()}`, function_name, `.${function_extension()}`]);
}
