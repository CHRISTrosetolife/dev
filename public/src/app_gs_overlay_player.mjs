import { list_first } from "./list_first.mjs";
import { list_adder } from "./list_adder.mjs";
import { game_character_direction_index } from "./game_character_direction_index.mjs";
import { each } from "./each.mjs";
import { game_character_indices } from "./game_character_indices.mjs";
import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { list_index } from "./list_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_img } from "./game_img.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
import { object_properties } from "./object_properties.mjs";
import { range_from } from "./range_from.mjs";
export function app_gs_overlay_player(map_c, map) {
  let z_indexes = app_gs_z_indexes();
  let directions = object_properties(game_character_indices());
  let player_directions = list_adder((la) => {
    each(directions, (direction) => {
      each(range_from(-1, 1), (walk_offset) => {
        let di = game_character_direction_index(direction, walk_offset);
        let url = game_img_character(map.player.character, di);
        let player_c_direction = game_img(
          map_c,
          url,
          map.player,
          list_index(z_indexes, "player"),
        );
        game_img_style_transition(player_c_direction);
        la(player_c_direction);
      });
    });
  });
  let result = {
    player_directions,
    first: list_first(player_directions),
  };
  return result;
}
