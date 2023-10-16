import { locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default async function Categories({
    params: {lang}
}: {
    params: {lang: locale}
}) {

    const page = await getDictionary(lang);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {page.navigation.category}
            <LocaleSwitcher />
        </main>
    )
}