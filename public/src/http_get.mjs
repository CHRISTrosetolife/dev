import {equal} from "./equal.mjs";
import {assert} from "./assert.mjs";
export function http_get(url) {
    let result = await axios.get(url);
    let {status, data} = result;
    assert(equal, [status, 200]);
    return data;
}
