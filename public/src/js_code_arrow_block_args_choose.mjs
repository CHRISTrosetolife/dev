import { js_code_arrow_block_args } from "./js_code_arrow_block_args.mjs";
import { js_code_arrow_block_args_async } from "./js_code_arrow_block_args_async.mjs";
export function js_code_arrow_block_args_choose(
  js_code_arrow_block_args_async_use,
) {
  return js_code_arrow_block_args_async_use
    ? js_code_arrow_block_args_async
    : js_code_arrow_block_args;
}
