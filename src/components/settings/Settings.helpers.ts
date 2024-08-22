import i18next from 'i18next'

class SettingsHelpers {
  static getLanguage = (): 'en' | 'ru' => i18next.language || window.localStorage.i18nextLng
}

export default SettingsHelpers
