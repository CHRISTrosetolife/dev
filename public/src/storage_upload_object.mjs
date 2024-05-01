import {file_write_json} from "./file_write_json.mjs";
import {file_name_json} from "./file_name_json.mjs";
import crypto from 'crypto';
export async function storage_upload_object(object, destination) {
    let uuid = crypto.randomUUID();
    let file_name = file_name_json(uuid);
    await file_write_json(file_path, object);
}
