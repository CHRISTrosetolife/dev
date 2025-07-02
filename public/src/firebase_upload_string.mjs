import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function firebase_upload_string(storage_path, s) {
  assert_arguments_length(arguments, 2);
  let { getStorage, ref, uploadString } = await import(
    "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"
  );
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let snapshot = await uploadString(storageRef, s);
}
