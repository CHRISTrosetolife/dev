import {list_length} from "./list_length.mjs";
import {range} from "./range.mjs";
export function list_indices(parts) {
    return range(list_length(parts));
}
