import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { http_get } from "./http_get.mjs";
export async function firebase_download(storage_path) {
  assert_arguments_length(arguments, 1);
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let snapshot = get(storageRef);
  let url = await getDownloadURL(storageRef);
  return await http_get(url);
}
