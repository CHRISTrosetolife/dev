import { object_merge } from "./object_merge.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
export async function firebase_storage_initialize_context(index_path, context) {
  let index = await firebase_storage_initialize(index_path);
  object_merge(context, {
    index,
  });
}
