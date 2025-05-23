import { log } from "./log.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { http_get } from "./http_get.mjs";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_download(storage_path) {
  assert_arguments_length(arguments, 1);
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  try {
    let url = await getDownloadURL(storageRef);
    return await http_get(url);
  } catch (e) {
    log({
      e,
    });
    if (e.code === "storage/object-not-found") {
      return null;
    } else {
      throw e;
    }
  }
}
