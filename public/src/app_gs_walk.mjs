import { null_not_is } from "./null_not_is.mjs";
import { assert } from "./assert.mjs";
import { game_character_direction_index } from "./game_character_direction_index.mjs";
import { html_img_src } from "./html_img_src.mjs";
import { list_xy } from "./list_xy.mjs";
import { add_1 } from "./add_1.mjs";
import { app_gs_direction } from "./app_gs_direction.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { game_direction_to_delta } from "./game_direction_to_delta.mjs";
import { sleep } from "./sleep.mjs";
import { app_gs_sleep_time } from "./app_gs_sleep_time.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { abs } from "./abs.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
export async function app_gs_walk(player_c, player, destination) {
  let direction = app_gs_direction(player, destination);
  assert(null_not_is, [direction]);
  player.direction = direction;
  html_img_src(
    player_c,
    game_img_character(player.character, game_character_index(direction)),
  );
  let steps_count =
    abs(player.y - destination.y) + abs(player.x - destination.x);
  await each_range_async(steps_count, async () => {
    let animate_count = 2;
    await each_range_async(animate_count, async (ac) => {
      let sleep_time = app_gs_sleep_time();
      let step_count = add_1(ac);
      if (player.walk_offset === 0) {
        player.walk_offset = -player.walk_previous;
        player.walk_previous = player.walk_offset;
      } else {
        player.walk_offset = 0;
      }
      let di = game_character_direction_index(direction, player.walk_offset);
      html_img_src(player_c, game_img_character(player.character, di));
      let delta = game_direction_to_delta(direction);
      game_img_position(
        player_c,
        player.y + (delta.y / animate_count) * step_count,
        player.x + (delta.x / animate_count) * step_count,
      );
      await sleep(sleep_time);
    });
    let delta = game_direction_to_delta(direction);
    each(list_xy(), (xy) => {
      let value =
        object_property_get(player, xy) + object_property_get(delta, xy);
      object_property_set(player, xy, value);
    });
  });
}
