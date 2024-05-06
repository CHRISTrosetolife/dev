import { functions_source } from "./functions_source.mjs";
import { http_post } from "./http_post.mjs";
import { server_port } from "./server_port.mjs";

export async function app_code() {
    let result = function_run(functions_source.name, [])
    console.log({result})
}
