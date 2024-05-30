import { assert_not_message_async } from "./assert_not_message_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function file_write(file_name, data) {
  await assert_not_message_async(
    file_exists,
    [file_name],
    string_combine_multiple(["file ", file_name, " already exists"]),
  );
  return await file_overwrite(file_name, data);
}
