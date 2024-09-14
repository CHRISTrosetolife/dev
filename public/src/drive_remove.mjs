import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { command_line } from "./command_line.mjs";
export async function drive_remove(drive_letter) {
  await command_line(
    string_combine_multiple([
      "D:\\RemoveDrive_x64\\RemoveDrive.exe ",
      drive_letter,
      ": -L",
    ]),
  );
}
