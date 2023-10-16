export const i18n = {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
} as const

export type locale = (typeof i18n)['locales'][number]