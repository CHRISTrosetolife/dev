import { server_port } from "./server_port.mjs";
import { http_post } from "./http_post.mjs";
import { function_import } from "./function_import.mjs";
import { web_is } from "./web_is.mjs";
export async function function_run(function_name, args) {
  let result;
  if (0) {
    if (web_is()) {
      result = await http_post(`http://localhost:${server_port()}/`, {
        function_name,
        args,
      });
      return;
    }
  }
  let imported_function = await function_import(function_name);
  result = await imported_function(...args);
  return result;
}
