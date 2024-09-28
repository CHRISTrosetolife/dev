import { http_get } from "./http_get.mjs";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_download(storage_path) {$aa
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let url = await getDownloadURL(storageRef);
  return await http_get(url);
}
