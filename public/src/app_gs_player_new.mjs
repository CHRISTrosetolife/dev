import { bible_names_men } from "./bible_names_men.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_player_new() {
  let player = {};
  player.walk_offset = 0;
  player.walk_previous = 1;
  player.character = list_random_item(game_img_list_male());
  player.name = list_random_item(bible_names_men());
  player.pray = {
    conversation: false,
  };
  player.conversation_count = 0;
  return player;
}
