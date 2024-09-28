import { invoke_async } from "./invoke_async.mjs";
import { each_async } from "./each_async.mjs";
export async function invoke_multiple_async(fns) {
  await each_async(fns, invoke_async);
}
