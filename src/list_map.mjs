export function list_map(list, mapper) {
    return list.map(element => mapper(element));
}