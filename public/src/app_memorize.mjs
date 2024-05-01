import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export async function app_memorize() {
    let root = html_document_body();
    let data = await http_get(storage_url());
    console.log({data})
}
function storage_url() {
    return 'https://firebasestorage.googleapis.com/v0/b/letjesusbeexalted.appspot.com/o/bible%2Fengbsb%2FJHN19.json?alt=media';
}

