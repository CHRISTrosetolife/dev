import { game_img_list_male } from "./game_img_list_male.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_gs_player_new(map) {
  map.player = {};
  map.player.walk_offset = 0;
  map.player.walk_previous = 1;
  map.player.character = list_random_item(game_img_list_male());
  map.player.pray = {
    conversation: false,
  };
}
