import { AppContent } from '@/components/store/app-content';
import { AppFooter } from '@/components/store/app-footer';
import { AppHeader } from '@/components/store/app-header';
import { AppShell } from '@/components/store/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
            <AppFooter />
        </AppShell>
    );
}
