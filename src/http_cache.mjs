import { http } from "./http.mjs";

export async function http_cache(url) {
    return await function_cache(http, [url])
}