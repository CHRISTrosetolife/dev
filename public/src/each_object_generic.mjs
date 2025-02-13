export function each_object_generic(keys_get, item_get, object, lambda) {
  let keys = keys_get(object);
  for (let key of keys) {
    let value = item_get(object, key);
    lambda(key, value);
  }
}
