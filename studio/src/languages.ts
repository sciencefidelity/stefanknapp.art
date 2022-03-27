export const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'pl', title: 'Polish' }
]

export const i18n = {
  languages: languages,
  base: languages.find(item => item.isDefault)?.id
}
