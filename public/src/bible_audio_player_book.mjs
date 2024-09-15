import { bible_audio_player_range } from "./bible_audio_player_range.mjs";
export async function bible_audio_player_book(book_letters_prefix) {
  let book_to = book_letters_prefix;
  await bible_audio_player_range(book_letters_prefix, book_to);
}
