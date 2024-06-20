import { app_gs_map_at } from "./app_gs_map_at.mjs";
import { list_single } from "./list_single.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_gs_at_single(grid, a) {
  let ts = list_adder((la) => app_gs_map_at(grid, a, la));
  let t = list_single(ts);
  return t;
}
