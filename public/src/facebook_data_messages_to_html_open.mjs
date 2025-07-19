import { file_extension_html } from "./file_extension_html.mjs";
import { facebook_data_messages_to_html } from "./facebook_data_messages_to_html.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { folder_external_root_combine } from "./folder_external_root_combine.mjs";
export async function facebook_data_messages_to_html_open(messages) {
  let result = facebook_data_messages_to_html(messages);
  let output_folder = folder_external_root_combine("output");
  let output_path = path_join([
    output_folder,
    string_combine_multiple([fn_name("sandbox_5"), file_extension_html()]),
  ]);
  await file_overwrite(output_path, result);
  await command_line_exec(output_path);
}
