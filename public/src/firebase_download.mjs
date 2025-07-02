import { log } from "./log.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { http_get } from "./http_get.mjs";
export async function firebase_download(storage_path) {
  assert_arguments_length(arguments, 1);
  let { getStorage, ref, getDownloadURL } = await import(
    "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js"
  );
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  try {
    let url = await getDownloadURL(storageRef);
    let v = await http_get(url);
    return v;
  } catch (e) {
    log({
      e,
    });
    if (e.code === "storage/object-not-found") {
      let v2 = null;
      return v2;
    } else {
      throw e;
    }
  }
}
