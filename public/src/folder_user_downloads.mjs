import { folder_user } from "./folder_user.mjs";
import { string_combine } from "./string_combine.mjs";
export function folder_user_downloads() {
  return string_combine(folder_user(), "Downloads\\");
}
