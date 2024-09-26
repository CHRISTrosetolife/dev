import { log } from "./log.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_read } from "./file_read.mjs";
import { function_run } from "./function_run.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
export async function function_run_json(
  function_name,
  input_file_path,
  output_file_path,
) {
  let args_json_string = await file_read(input_file_path);
  let { args } = json_from(args_json_string);
  log({
    function_name,
    args,
  });
  let result = await function_run(function_name, args);
  let json = json_to({
    result,
  });
  await file_overwrite(output_file_path, json);
}
