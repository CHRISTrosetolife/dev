import crypto from 'crypto'
export async function storage_upload_object(object, destination) {
    let file_name = string_combine([crypto.randomUUID(),'.json']);
    await file_write_json(file_path, object);
}
