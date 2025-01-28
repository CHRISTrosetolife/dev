export function app_language_2_other(
  language,
  language_learn,
  language_fluent,
) {
  return language === language_learn ? language_fluent : language_learn;
}
