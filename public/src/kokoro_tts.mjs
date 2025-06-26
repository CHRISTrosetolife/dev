import { folder_external_root_combine } from "./folder_external_root_combine.mjs";
import { command_line } from "./command_line.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_write } from "./file_write.mjs";
import { log } from "./log.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { sandbox_3 } from "./sandbox_3.mjs";
import { uuid_file } from "./uuid_file.mjs";
export async function kokoro_tts(units) {
  let program = folder_external_root_combine(
    "programs\\WPy64-312100\\scripts\\python.bat",
  );
  await uuid_file(sandbox_3, async function (file_path) {
    let command = list_join_space([program, "py/tts.py", file_path]);
    log({
      command,
    });
    await file_write(
      file_path,
      json_format_to({
        units,
      }),
    );
    let result = await command_line(command);
    log(result);
  });
}
