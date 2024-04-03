import {equal_by} from "./equal_by.mjs";
import {json_to} from "./json_to.mjs";
export function equal_json(a, b) {
    return equal_by(a, b, json_to);
}
