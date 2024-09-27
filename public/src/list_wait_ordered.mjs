import { identity } from "./identity.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function list_wait_ordered(promises) {
  return await list_map_async(promises, identity);
}
