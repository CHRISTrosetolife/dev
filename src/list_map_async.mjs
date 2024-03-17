export async function list_map_async(list, mapper) {
    let mapped = list_map(list, mapper);
    for (let m of mapped) {
        await m;
    }
 }