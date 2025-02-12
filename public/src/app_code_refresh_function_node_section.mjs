import { app_code_section } from "./app_code_section.mjs";
import { object_copy_merge } from "./object_copy_merge.mjs";
import { app_code_refresh_function_node } from "./app_code_refresh_function_node.mjs";
export function app_code_refresh_function_node_section(args, indent) {
  let section = app_code_section(args, indent);
  app_code_refresh_function_node(
    object_copy_merge(args, {
      parent: section,
    }),
  );
}
