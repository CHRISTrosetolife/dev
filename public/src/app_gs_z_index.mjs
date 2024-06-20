import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
import { list_index } from "./list_index.mjs";
export function app_gs_z_index(z_index_name) {
  return list_index(app_gs_z_indexes(), "tile");
}
