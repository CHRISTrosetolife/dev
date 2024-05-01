import {json_from} from "./json_from.mjs";
import {file_read} from "./file_read.mjs";
export async function file_read_json(file_path) {
    let json = await file_read(file_path);
    let object = json_from(json);
    return object;
}
