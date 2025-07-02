import { assert_arguments_length } from "./assert_arguments_length.mjs";
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_upload_bytes(storage_path, blob) {
  assert_arguments_length(arguments, 2);
  let { getStorage, ref, uploadBytes } = await import(
    "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"
  );
  let storageRef = ref(storage, storage_path);
  let snapshot = await uploadBytes(storageRef, blob);
}
