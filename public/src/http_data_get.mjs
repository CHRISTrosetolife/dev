import {equal} from "./equal.mjs";
import {assert} from "./assert.mjs";
export function http_data_get(result) {
    let {status, data} = result;
    assert(equal, [status, 200]);
    return data;
}
