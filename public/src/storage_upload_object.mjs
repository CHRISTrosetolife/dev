import crypto from 'crypto'
export async function storage_upload_object(object, destination) {
    return crypto.randomUUID()
    await file_write_json(file_path, object);
}
