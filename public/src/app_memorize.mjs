import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export function app_memorize() {
    let root = html_document_body();
    let data = http_get('https://firebasestorage.googleapis.com/v0/b/letjesusbeexalted.appspot.com/o/bible%2Fengbsb%2FJHN19.json?alt=media');
    console.log({data})
}
