import { log_json } from "./log_json.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_any_created } from "./list_any_created.mjs";
import { audio_upload } from "./audio_upload.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_chunk_each } from "./list_chunk_each.mjs";
export async function app_language_upload_audio(group, from) {
  await list_chunk_each(group, async function each_chunk(chunk) {
    log_json({
      group,
    });
    let mapped = list_map(chunk, async (atom) => {
      let mapped2 = list_map(atom, async (pair) => {
        let b = list_first(pair);
        log({
          b,
        });
        return;
        let r = await audio_upload(from, b);
        return r;
      });
      let createds = await list_wait(mapped2);
      return list_any_created(createds);
    });
    let createds = await list_wait(mapped);
    if (object_property_get(list_any_created(createds), "created")) {
      log("chunk finished");
    }
  });
}
