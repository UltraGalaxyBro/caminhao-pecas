import * as React from "react";
import { Breadcrumbs } from '@/components/store/breadcrumbs';
import { Icon } from '@/components/store/icon';
import { Button } from '@/components/ui/button';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem, type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Cog, Facebook, Instagram, Menu, LogIn, MonitorCog, Truck } from 'lucide-react';
import AppLogo from './app-logo';
/* import { Skeleton } from '@/components/ui/skeleton';
import { usePageLoading } from "@/hooks/use-page-loading"; */
import { SearchBox } from "./search-box";

const mainNavItems: NavItem[] = [
    {
        title: 'Motor',
        href: '/motor',
        icon: Cog,
        description: 'Peças e componentes para o sistema de motorização do seu caminhão.',
    },
    {
        title: 'Transmissão',
        href: '/transmissao',
        icon: Cog,
        description: 'Componentes para o sistema de câmbio e transmissão de força.',
    },
    {
        title: 'Chassi e Suspensão',
        href: '/chassi-e-suspensao',
        icon: Cog,
        description: 'Peças estruturais e componentes para o sistema de suspensão.',
    },
    {
        title: 'Freio',
        href: '/freio',
        icon: Cog,
        description: 'Sistema completo de frenagem e componentes de segurança.',
    },
    {
        title: 'Cabine e Carroceria',
        href: '/cabine-e-carroceria',
        icon: Cog,
        description: 'Peças para cabine, carroceria e acabamento do seu caminhão.',
    },
    {
        title: 'Elétrica',
        href: '/eletrica',
        icon: Cog,
        description: 'Componentes elétricos e eletrônicos para diversas aplicações.',
    },
];

const socialNavItems: NavItem[] = [
    {
        title: 'Facebook da Caminhão Peças',
        href: 'https://www.facebook.com/caminhaopecas/',
        icon: Facebook,
    },
    {
        title: 'Instagram da Caminhão Peças',
        href: 'https://www.instagram.com/caminhao_pecas/',
        icon: Instagram,
    },
];

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
/*     const loading = usePageLoading()
 */    const page = usePage<SharedData>();
    const { auth } = page.props;

    return (
        <header>
            {/* Mobile */}
            <div className="lg:hidden border-sidebar-border/80 border-b">
                <div className="mx-auto flex h-16 items-center px-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="mr-2 h-9 w-9">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-sidebar flex h-full w-64 flex-col">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <SheetHeader className="text-left">
                                <SheetDescription className="sr-only">
                                    Menu lateral em resolução mobile para auxiliar o usuário em navegar pelo site da Caminhão Peças
                                </SheetDescription>
                                {/*        {loading ? (
                                    <Skeleton className="h-8 w-8 rounded-full" />
                                ) : auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <MonitorCog className="h-5 w-5" />
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <LogIn className="h-5 w-5" />
                                    </Link>
                                )} */}

                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <MonitorCog className="h-5 w-5" />
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <LogIn className="h-5 w-5" />
                                    </Link>
                                )}

                                <div className="flex justify-center p-4">
                                    {/* {loading ? (
                                        <Skeleton className="h-12 w-40" />
                                    ) : (
                                        <img
                                            src="/logo-completa.webp"
                                            alt="Logo Caminhão Peças"
                                            className="max-w-[160px] h-auto mx-auto"
                                        />
                                    )} */}
                                    <img
                                        src="/logo-completa.webp"
                                        alt="Logo Caminhão Peças"
                                        className="max-w-[160px] h-auto mx-auto"
                                    />
                                </div>
                            </SheetHeader>
                            <div className="flex-1 px-4 py-6">
                                <nav className="space-y-6">
                                    {/* {loading ? (
                                        Array(7).fill(0).map((_, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Skeleton className="h-5 w-5 rounded-full" />
                                                <Skeleton className="h-6 w-24" />
                                            </div>
                                        ))
                                    ) : (
                                        <>
                                            {mainNavItems.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-center gap-3 font-medium hover:text-primary transition-colors"
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span>{item.title}</span>
                                                </Link>
                                            ))}
                                            <Link
                                                href="/desmanche"
                                                className="flex items-center gap-3 font-medium hover:text-primary transition-colors"
                                            >
                                                <Icon iconNode={Truck} className="h-5 w-5" />
                                                <span>P/ Desmanche</span>
                                            </Link>
                                        </>
                                    )} */}
                                    {mainNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-center gap-3 font-medium hover:text-primary transition-colors"
                                        >
                                            {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                    <Link
                                        href="/desmanche"
                                        className="flex items-center gap-3 font-medium hover:text-primary transition-colors"
                                    >
                                        <Icon iconNode={Truck} className="h-5 w-5" />
                                        <span>P/ Desmanche</span>
                                    </Link>
                                </nav>
                            </div>

                            <SheetFooter className="px-4 pb-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-center gap-4">
                                        {/* {loading ? (
                                            <>
                                                <Skeleton className="h-8 w-8 rounded-full" />
                                                <Skeleton className="h-8 w-8 rounded-full" />
                                            </>
                                        ) : (
                                            socialNavItems.map((item) => (
                                                <a
                                                    key={item.title}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                    <span className="sr-only">{item.title}</span>
                                                </a>
                                            ))
                                        )} */}
                                        {socialNavItems.map((item) => (
                                            <a
                                                key={item.title}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                                <span className="sr-only">{item.title}</span>
                                            </a>
                                        ))}
                                    </div>

                                    <p className="text-xs text-muted-foreground text-center">
                                        Solução em peças para seu caminhão!
                                    </p>
                                </div>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                    <Link href="/" prefetch className="flex items-center justify-center flex-grow">
                        {/* {loading ? (
                            <Skeleton className="h-8 w-36" />
                        ) : (
                            <AppLogo />
                        )} */}
                        <AppLogo />
                    </Link>

                    <div className="ml-auto">
                        <SearchBox isMobile={true} />
                    </div>
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
                <div className="mx-auto px-4 py-2 md:max-w-7xl text-center font-medium flex items-center justify-center">
                    {/* {loading ? (
                        <Skeleton className="h-5 w-3/4 max-w-xl mx-auto" />
                    ) : (
                        <>
                            Solução completa em peças para seu caminhão - Enviamos para todo o Brasil!
                            <img src="/static/img/bandeira-brasil.png" title="Ícone do Brasil" alt="Ícone do Brasil" className="ml-2 inline-block" />
                        </>
                    )} */}
                    Solução completa em peças para seu caminhão - Enviamos para todo o Brasil!
                    <img src="/static/img/bandeira-brasil.png" title="Ícone do Brasil" alt="Ícone do Brasil" className="ml-2 inline-block" />
                </div>

                <div className="border-sidebar-border/80 border-b">
                    <div className="mx-auto flex h-20 items-center justify-between px-4 md:max-w-7xl">
                        <div className="flex items-center">
                            {/*        {loading ? (
                                <Skeleton className="h-10 w-44" />
                            ) : (
                                <Link href="/" prefetch className="flex items-center space-x-1">
                                    <AppLogo />
                                </Link>
                            )} */}
                            <Link href="/" prefetch className="flex items-center space-x-1">
                                <AppLogo />
                            </Link>
                        </div>

                        <div className="flex-grow mx-12 max-w-xl">
                            {/*    {loading ? (
                                <Skeleton className="h-11 w-full rounded-lg" />
                            ) : (
                                <SearchBox />
                            )} */}
                            <SearchBox />
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-2">
                                {/* {loading ? (
                                    <>
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                    </>
                                ) : (
                                    socialNavItems.map((item) => (
                                        <a
                                            key={item.title}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <span className="sr-only">{item.title}</span>
                                            {item.icon && <Icon iconNode={item.icon} className="size-5" />}
                                        </a>
                                    ))
                                )} */}
                                {(socialNavItems.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                    >
                                        <span className="sr-only">{item.title}</span>
                                        {item.icon && <Icon iconNode={item.icon} className="size-5" />}
                                    </a>
                                ))
                                )}
                            </div>

                            <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700"></div>

                            {/* {loading ? (
                                <Skeleton className="h-10 w-10 rounded-lg" />
                            ) : (
                                auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                                    >
                                        <MonitorCog className="size-5" />
                                        <span className="sr-only">Área administrativa</span>
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                                    >
                                        <LogIn className="size-5" />
                                        <span className="sr-only">Área restrita</span>
                                    </Link>
                                )
                            )} */}
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <MonitorCog className="size-5" />
                                    <span className="sr-only">Área administrativa</span>
                                </Link>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                                >
                                    <LogIn className="size-5" />
                                    <span className="sr-only">Área restrita</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Terceira linha: Menu de navegação com ícones */}
                <div className="border-sidebar-border/80 border-b bg-accent/50">
                    <div className="mx-auto px-4 md:max-w-7xl">
                        <nav className="flex items-center justify-between h-14">
                            {/*  {loading ? (
                                Array(7).fill(0).map((_, index) => (
                                    <Skeleton key={index} className="h-6 w-24" />
                                ))
                            ) : (
                                <>
                                    {mainNavItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-2 font-medium hover:text-primary transition-colors h-full px-4",
                                                page.url === item.href && "text-primary border-b-2 border-primary"
                                            )}
                                        >
                                            {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                            <span>{item.title}</span>
                                        </Link>
                                    ))}
                                    <Link
                                        href="/desmanche"
                                        className={cn(
                                            "flex items-center gap-2 font-medium hover:text-primary transition-colors h-full px-4",
                                            page.url === '/desmanche' && "text-primary border-b-2 border-primary"
                                        )}
                                    >
                                        <Icon iconNode={Truck} className="h-5 w-5" />
                                        <span>P/ Desmanche</span>
                                    </Link>
                                </>
                            )} */}
                            {mainNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-2 font-medium hover:text-primary transition-colors h-full px-4",
                                        page.url === item.href && "text-primary border-b-2 border-primary"
                                    )}
                                >
                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                            <Link
                                href="/desmanche"
                                className={cn(
                                    "flex items-center gap-2 font-medium hover:text-primary transition-colors h-full px-4",
                                    page.url === '/desmanche' && "text-primary border-b-2 border-primary"
                                )}
                            >
                                <Icon iconNode={Truck} className="h-5 w-5" />
                                <span>P/ Desmanche</span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Breadcrumbs */}
            {breadcrumbs.length > 1 && (
                <div className="border-sidebar-border/70 flex w-full border-b">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                        {/* {loading ? (
                            <div className="flex gap-2 items-center">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-4 rounded-full" />
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-4 rounded-full" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                        ) : (
                            <Breadcrumbs breadcrumbs={breadcrumbs} />
                        )} */}
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </header>
    );
}