import i18next from 'i18next'

class LangHelpers {
  static getLanguage = (): 'en' | 'ru' => i18next.language || window.localStorage.i18nextLng
}

export default LangHelpers
