import {file_delete} from "./file_delete.mjs";
import {storage_upload_file} from "./storage_upload_file.mjs";
import {file_write} from "./file_write.mjs";
import {file_name_json} from "./file_name_json.mjs";
import {uuid} from "./uuid.mjs";
export async function storage_upload_string(string, destination) {
    let u = uuid();
    let file_path = file_name_json(u);
    await file_write(file_path, string);
    storage_upload_file(file_path, destination);
    await file_delete(file_path);
}
