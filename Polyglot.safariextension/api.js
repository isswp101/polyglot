import { translate as googleTranslate } from './google-api'
import { translate as yandexTranslate } from './yandex-api'

export async function translate(text, settings) {
  if (settings.provider === 'google') {
    return googleTranslate(text, settings.targetLanguage)
  } else {
    return yandexTranslate(text, settings.targetLanguage, settings.yandexApiKey)
  }
}
