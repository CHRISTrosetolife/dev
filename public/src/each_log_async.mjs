import { log } from "./log.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_size } from "./list_size.mjs";
export async function each_log_async(list, lambda) {
  let size = list_size(list);
  await each_index_async(list, async (item, index) => {
    log({
      size,
      index,
      item,
    });
    await lambda(item);
  });
}
