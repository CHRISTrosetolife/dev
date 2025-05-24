import { dir } from "./dir.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function drive_remove(drive_letter) {
  await dir(
    string_combine_multiple([
      "D:\\RemoveDrive_x64\\RemoveDrive.exe ",
      drive_letter,
      ": -L",
    ]),
  );
}
