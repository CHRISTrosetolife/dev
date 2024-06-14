import { game_img_path_pipoya_rpg_32 } from "./game_img_path_pipoya_rpg_32.mjs";
import { files_list_generate_starts_with } from "./files_list_generate_starts_with.mjs";
import { each_async } from "./each_async.mjs";
import { string_combine } from "./string_combine.mjs";
export async function game_img_pipoya_rpg_32_lists_generate() {
  let prefixes = ["cat", "dog", "male", "female", "soldier"];
  await each_async(prefixes, async (prefix) => {
    await files_list_generate_starts_with(
      game_img_path_pipoya_rpg_32(),
      ".png",
      prefix,
      string_combine("game_img_list_", prefix),
    );
  });
}
