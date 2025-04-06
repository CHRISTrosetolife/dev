import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function path_drive(drive_letter) {
  return string_combine_multiple([drive_letter, ":"]);
}
