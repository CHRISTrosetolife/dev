import { each_range_async } from "./each_range_async.mjs";
import { function_name_new } from "./function_name_new.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function function_names_new(function_name_base, count) {
  await list_adder_async(async (la) => {
    await each_range_async(count, lambda);
    function lambda() {}
    la(await function_name_new(function_name_base));
  });
}
