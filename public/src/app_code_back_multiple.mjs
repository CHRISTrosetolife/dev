import { list_size } from "./list_size.mjs";
import { app_code_back } from "./app_code_back.mjs";
import { range } from "./range.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { assert } from "./assert.mjs";
import { global_get } from "./global_get.mjs";
export async function app_code_back_multiple(count) {
  let { back_stack } = global_get();
  assert(greater_than_equal, [list_size(back_stack), count]);
  for (let i of range(count)) {
    await app_code_back();
  }
}
