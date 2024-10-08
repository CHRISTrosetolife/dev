import { assert_arguments_length } from "./assert_arguments_length.mjs";
import {
  getStorage,
  ref,
  listAll,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_list(storage_path) {
  assert_arguments_length(arguments, 1);
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let r = await listAll(storageRef);
  return r;
}
