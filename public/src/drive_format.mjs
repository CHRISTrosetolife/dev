import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
export async function drive_format(drive_letter) {
  await command_line_exec(
    string_combine_multiple(["format/FS:FAT32 ", drive_letter, ":/q /Y"]),
  );
}
