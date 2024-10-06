import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
export async function list_chunk_each(group, each_chunk) {
  await each_async(list_chunk(group, 20), async (chunk) => {
    await each_chunk(chunk);
  });
}
