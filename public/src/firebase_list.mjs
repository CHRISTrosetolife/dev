import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function firebase_list(storage_path) {
  assert_arguments_length(arguments, 1);
  let { getStorage, ref, listAll } = await import(
    "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"
  );
  let storageRef = ref(storage, storage_path);
  let r = await listAll(storageRef);
  return r;
}
