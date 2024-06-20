import { file_exists_not } from "./file_exists_not.mjs";
import { function_path_suffix } from "./function_path_suffix.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { command_line } from "./command_line.mjs";
import { log } from "./log.mjs";
import { function_run_json } from "./function_run_json.mjs";
import { run } from "./run.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { uuid_file } from "./uuid_file.mjs";
import { string_replace } from "./string_replace.mjs";
import { json_to } from "./json_to.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
export async function function_run_terminal(function_name, args) {
  return await new Promise(async (resolve, reject) => {
    assert(list_is, [args]);
    let args_json = json_to({
      args,
    });
    let replaced = string_replace(args_json, "'", "''");
    replaced = string_replace(replaced, '"', '\\"');
    await uuid_file(async (file_path_input) => {
      await uuid_file(async (file_path_output) => {
        await file_overwrite(file_path_input, args_json);
        let command = `node ${run.name}${function_path_suffix()} ${function_run_json.name} ${function_name} ${file_path_input} ${file_path_output}`;
        if (0) {
          log({
            command,
          });
        }
        await command_line(command);
        if (await file_exists_not(file_path_output)) {
          reject();
        }
        let contents = await file_read_json(file_path_output);
        let { result } = contents;
        resolve(result);
      });
    });
  });
}
