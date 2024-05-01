export async function storage_upload_object(object, destination) {
    json = await file_write_json(file_path, object);
}
