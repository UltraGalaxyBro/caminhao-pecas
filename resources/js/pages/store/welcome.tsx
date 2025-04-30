import StoreLayout from '@/layouts/store-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Início',
        href: '/',
    },
];

export default function Welcome() {
    return (
        <StoreLayout breadcrumbs={breadcrumbs}>
            <Head title="Bem-vindo(a)!" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                
            </div>
        </StoreLayout>
    );
}

