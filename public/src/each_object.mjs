import {object_property_get} from "./object_property_get.mjs";
import {object_properties} from "./object_properties.mjs";
export function each_object(object, lambda) {
    let keys = object_properties(object);
    for (let key of keys) {
        let value = object_property_get(object, key);
        lambda(key, value);
    }
}
