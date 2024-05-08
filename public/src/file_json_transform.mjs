import {file_write_json} from "./file_write_json.mjs";
import {file_read_json} from "./file_read_json.mjs";
export async function file_json_transform(lambda, file_path, args) {
    let obj = await file_read_json(file_path);
    let result = await lambda(obj, ...args);
    await file_write_json(file_path, obj);
    return result;
}
