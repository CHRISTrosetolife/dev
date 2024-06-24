import { app_gs_sleep_time_walk } from "./app_gs_sleep_time_walk.mjs";
import { sleep } from "./sleep.mjs";
import { app_gs_walk_direction } from "./app_gs_walk_direction.mjs";
import { game_character_direction_index } from "./game_character_direction_index.mjs";
import { html_img_src } from "./html_img_src.mjs";
import { list_xy } from "./list_xy.mjs";
import { add_1 } from "./add_1.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { game_direction_to_delta } from "./game_direction_to_delta.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { abs } from "./abs.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_gs_walk(context, destination) {
  assert_arguments_length(arguments, 2);
  let direction = app_gs_walk_direction(
    context.player_c,
    context.player,
    destination,
  );
  let steps_count =
    abs(context.player.y - destination.y) +
    abs(context.player.x - destination.x);
  await each_range_async(steps_count, async () => {
    let animate_count = 2;
    await each_range_async(animate_count, async (ac) => {
      let step_count = add_1(ac);
      if (context.player.walk_offset === 0) {
        context.player.walk_offset = -context.player.walk_previous;
        context.player.walk_previous = context.player.walk_offset;
      } else {
        context.player.walk_offset = 0;
      }
      let di = game_character_direction_index(
        direction,
        context.player.walk_offset,
      );
      html_img_src(player_c, game_img_character(context.player.character, di));
      let delta = game_direction_to_delta(direction);
      game_img_position(
        context.player_c,
        context.player.y + (delta.y / animate_count) * step_count,
        context.player.x + (delta.x / animate_count) * step_count,
      );
      let sleep_time = app_gs_sleep_time_walk();
      await sleep(sleep_time);
    });
    let delta = game_direction_to_delta(direction);
    each(list_xy(), (xy) => {
      let value =
        object_property_get(context.player, xy) +
        object_property_get(delta, xy);
      object_property_set(context.player, xy, value);
    });
  });
}
