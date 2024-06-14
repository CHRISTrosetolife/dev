import { files_list_generate_starts_with } from "./files_list_generate_starts_with.mjs";
import { each_async } from "./each_async.mjs";
export async function game_img_pipoya_rpg_32_lists_generate() {
  let prefixes = ["cat", "dog", "male", "female", "soldier"];
  await each_async(prefixes, (prefix) => {
    files_list_generate_starts_with;
  });
}
