export function js_node_is(candidate) {
    return object_property_exists(candidate, 'type');
}