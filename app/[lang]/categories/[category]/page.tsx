import React from 'react';
import { locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Category({
    params: {lang}
}: {
    params: {lang: locale}
}) {
    const page = await getDictionary(lang);
    return (
        <div>{page.welcome}</div>
    );
}

