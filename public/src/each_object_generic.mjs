export function each_object_generic(keys_get, object, item_get, lambda) {
  let keys = keys_get(object);
  for (let key of keys) {
    let value = item_get(object, key);
    lambda(key, value);
  }
}
