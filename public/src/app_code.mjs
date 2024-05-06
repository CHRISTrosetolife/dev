import { http_post } from "./http_post.mjs";
import { server_port } from "./server_port.mjs";

export async function app_code() {
    let result = await http_post(`http://localhost:${server_port()}/`, { function_name: 'functions_source', args: [] })
    console.log({result})
}
