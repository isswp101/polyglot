import url from 'url'
import 'whatwg-fetch' // eslint-disable-line import/no-unassigned-import

export async function translate(text, targetLanguage, apiKey) {
  const query = url.format({
    query: {
      key: apiKey,
      lang: targetLanguage,
      text: text,
    },
  })
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate${query}`

  try {
    const response = await fetch(endpoint)
    const body = await response.text()
    const data = JSON.parse(body)
    const translatedText = data.text[0].replace(/(?:\r\n|\r|\n)/g, '<br/>')
    return `[Y] ${translatedText}`
  } catch (err) {
    Promise.reject(err)
  }
}
