import {object_property_exists} from './object_property_exists.mjs';
export function js_node_is(candidate) {
    if (null_is(candidate)) {
        
    }
    return object_property_exists(candidate, 'type');
}