import {object_properties} from './object_properties.mjs';
import {object_property_get} from './object_property_get.mjs';
export function object_values(object) {
    let properties = object_properties(object);
    return list_map(properties, p => object_property_get(object, p));
}