import {bible_engbsb_storage_path} from "./bible_engbsb_storage_path.mjs";
import {string_combine} from "./string_combine.mjs";
export function bible_engbsb_storage_path_file(file_name) {
    return string_combine(bible_engbsb_storage_path(), file_name);
}
