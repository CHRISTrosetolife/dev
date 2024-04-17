import {folder_name_public} from "./folder_name_public.mjs";
import {folder_name_src} from './folder_name_src.mjs';
import {function_extension} from './function_extension.mjs';
export function function_name_to_path(function_name) {
    if (false) folder_name_public();
    return `./public/${folder_name_src()}/${function_name}.${function_extension()}`;
}
