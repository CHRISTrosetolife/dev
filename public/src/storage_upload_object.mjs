import {file_write} from "./file_write.mjs";
import {json_to} from "./json_to.mjs";
import {file_delete} from "./file_delete.mjs";
import {uuid} from "./uuid.mjs";
import {file_write_json} from "./file_write_json.mjs";
import {file_name_json} from "./file_name_json.mjs";
import {storage_upload_file} from "./storage_upload_file.mjs";
export async function storage_upload_object(object, destination) {
    let u = uuid();
    let file_path = file_name_json(u);
    let json = json_to(object);
    await file_write(file_path, json);
    storage_upload_file(file_name, destination);
    await file_delete(file_path);
}
