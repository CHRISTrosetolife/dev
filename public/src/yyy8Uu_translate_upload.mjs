import { storage_upload_object } from "./storage_upload_object.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { list_single } from "./list_single.mjs";
import { yyy8Uu_part } from "./yyy8Uu_part.mjs";
import { gcloud_translate_cache } from "./gcloud_translate_cache.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { range } from "./range.mjs";
export async function yyy8Uu_translate_upload() {
  for (let index of range(16)) {
    let latin = await yyy8Uu_parts(index);
    let english = await list_adder_async(async (la) => {
      await each_index_async(latin, async (part, index2) => {
        let translateds = await gcloud_translate_cache(
          "la",
          "en",
          yyy8Uu_part.name,
          [index, index2],
        );
        let translated = list_single(translateds);
        la(translated);
      });
    });
    let destination = yyy8Uu_storage_path(index);
    await storage_upload_object(
      {
        english,
        latin,
      },
      destination,
    );
  }
}
