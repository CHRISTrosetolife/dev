import {bible_engbsb_storage_path_file} from "./bible_engbsb_storage_path_file.mjs";
import {storage_url} from "./storage_url.mjs";
import {http_get} from "./http_get.mjs";
import {html_document_body} from "./html_document_body.mjs";
import { html_element } from "./html_element.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export async function app_memorize() {
    let root = html_document_body();
    let file_path = bible_engbsb_storage_path_file('JHN19');
    let verses = await http_get(storage_url(file_path));
    console.log({
        data: verses
    });
    for (let verse of verses) {
        let section = html_element(root, 'section');
        html_inner_set()
    }
}
