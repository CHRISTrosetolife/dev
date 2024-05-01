export async function storage_upload_object(object, destination) {
    await file_write_json(file_path, object);
}
