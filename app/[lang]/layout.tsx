import './globals.css'
import { Vollkorn, Roboto } from 'next/font/google'
import { i18n, locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import { ThemeProvider } from '@/context/ThemeProvider';


const vollcorn =  Vollkorn({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-vollcorn'
})


const roboto =  Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-roboto'
})
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}


export async function generateMetadata({
  params: {lang}
}: {
  params: {lang: locale}
}) {
  const t = await getDictionary(lang);
  return {
    title: t.metadata.main.title,
    description: t.metadata.description
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${vollcorn.variable} ${roboto.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
