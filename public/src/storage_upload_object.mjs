import {uuid} from "./uuid.mjs";
import {file_write_json} from "./file_write_json.mjs";
import {file_name_json} from "./file_name_json.mjs";
export async function storage_upload_object(object, destination) {
    let u = uuid();
    let file_name = file_name_json(u);
    await file_write_json(file_path, object);
}
