export function list_any(list, predicate) {
    for (let element of list) {
        if (predicate(element)) {
            return true;
        }
    }
    return false;
}
