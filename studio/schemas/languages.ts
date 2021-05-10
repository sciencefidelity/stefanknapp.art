export const supportedLanguages = [
  { name: 'en', title: 'English', isDefault: true },
  { name: 'pl', title: 'Polish' },
];

export const baseLanguage = supportedLanguages.find(l => l.isDefault)
