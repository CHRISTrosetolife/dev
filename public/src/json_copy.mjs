import {json_from} from "./json_from.mjs";
import {json_to} from "./json_to.mjs";
export function json_copy(input) {
    let json = json_to(input);
    return json_from(json);
}
