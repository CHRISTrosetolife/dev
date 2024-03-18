export function object_values(object) {
    let properties = object_properties(object);
    return list_map(properties, p => object_property_get(object, p));
}