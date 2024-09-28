import {
  getStorage,
  ref,
  uploadBytes,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.12.2/firebase-storage.min.js";
export async function firebase_upload(storage_path, blob) {$aa
  let storage = getStorage();
  let storageRef = ref(storage, storage_path);
  let snapshot = await uploadBytes(storageRef, blob);
}
