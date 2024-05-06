import {http_data_get} from "./http_data_get.mjs";
import {equal} from "./equal.mjs";
import {assert} from "./assert.mjs";
export async function http_post(url, body) {
    let result = await axios.post(url, body);
    return http_data_get(result);
}
