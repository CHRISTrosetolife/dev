import fetch from 'node-fetch';
import {sleep} from './sleep.mjs';
import {integer_random} from './integer_random.mjs';
export async function http(url) {
    await sleep(integer_random(5000, 8000));
    let response = await fetch(url);
    let body = await response.text();
    return body;
}
