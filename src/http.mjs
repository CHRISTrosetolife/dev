import fetch from 'node-fetch';
export async function http(url) {
    let response = await fetch(url);
    let body = await response.text();
    return body;
}