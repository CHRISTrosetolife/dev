import { firebase_save } from "./firebase_save.mjs";
export async function firebase_save_index(context, index_path) {
  let { index } = context;
  await firebase_save(index_path, index);
}
