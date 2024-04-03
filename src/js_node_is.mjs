import {object_property_exists} from './object_property_exists.mjs';
import {null_is} from './null_is.mjs';
export function js_node_is(candidate) {
    if (null_is(candidate)) {
        return false;
    }
    return object_property_exists(candidate, 'type');
}
