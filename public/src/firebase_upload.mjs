export async function firebase_upload(storage_path, blob) {
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let snapshot = await uploadBytes(storageRef, blob);
}
