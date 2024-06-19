import { app_gs_screen_size } from "./app_gs_screen_size.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
export function app_gs_map_extends() {
  let { x_count, y_count } = app_gs_screen_size();
  let x_extend = floor(ceiling(x_count) / 2);
  let y_extend = floor(ceiling(y_count) / 2);
  return {
    y_extend,
    x_extend,
  };
}
