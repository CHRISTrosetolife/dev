import {equal} from "./equal.mjs";
import {assert} from "./assert.mjs";
export async function http_post(url, body) {
    let result = await axios.post(url, body);
    let {status, data} = result;
    assert(equal, [status, 200]);
    return data;
}
