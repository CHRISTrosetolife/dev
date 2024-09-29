import { assert_arguments_length } from "./assert_arguments_length.mjs";
import {
  getStorage,
  ref,
  uploadString,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_upload_string(storage_path, blob) {
  assert_arguments_length(arguments, 2);
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let snapshot = await uploadString(storageRef, blob);
}
