import {storage_url} from "./storage_url.mjs";
import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
export async function app_memorize() {
    let root = html_document_body();
    let data = await http_get(storage_url(`bible/engbsb/JHN19.json`));
    console.log({
        data
    });
}
