import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_download(storage_path, blob) {
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let url = await getDownloadURL(storageRef);
}
