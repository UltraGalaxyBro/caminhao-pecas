import { Link, usePage } from '@inertiajs/react';
import { Facebook, Instagram, Mail, Phone, MapPin, Truck, Clock, Shield } from 'lucide-react';
import { Icon } from '@/components/store/icon';
/* import { Skeleton } from '@/components/ui/skeleton';
import { usePageLoading } from "@/hooks/use-page-loading"; */
import { type SharedData } from '@/types';

const footerLinks = [
    {
        title: "Categorias",
        links: [
            { label: "Motor", href: "/motor" },
            { label: "Transmissão", href: "/transmissao" },
            { label: "Chassi e Suspensão", href: "/chassi-e-suspensao" },
            { label: "Freio", href: "/freio" },
            { label: "Cabine e Carroceria", href: "/cabine-e-carroceria" },
            { label: "Elétrica", href: "/eletrica" },
            { label: "P/ Desmanche", href: "/desmanche" },
        ],
    },
    {
        title: "Informativo",
        links: [
            { label: "Sobre nós", href: "/sobre" },
            { label: "Política de entrega", href: "/politica-entrega" },
            { label: "Política de troca", href: "/politica-troca" },
            { label: "Política de devolução", href: "/politica-devolucao" },
            { label: "Política de cookies", href: "/politica-cookies" },
        ],
    },
];

const vantagens = [
    {
        icon: Truck,
        title: "Entrega para todo Brasil",
        description: "Enviamos para todos os estados"
    },
    {
        icon: Clock,
        title: "Atendimento Rápido",
        description: "Especialistas à disposição"
    },
    {
        icon: Shield,
        title: "Compra Segura",
        description: "Seu pedido protegido"
    }
];

export function AppFooter() {
/*     const loading = usePageLoading();
 */    const page = usePage<SharedData>();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-sidebar-border/80 mt-16">
            {/* Vantagens - Centralizadas e com espaçamento melhorado */}
            <div className="mx-auto max-w-5xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/*{loading ?
                        Array(3).fill(0).map((_, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <Skeleton className="h-16 w-16 rounded-full mb-4" />
                                <Skeleton className="h-6 w-48 mb-2" />
                                <Skeleton className="h-4 w-40" />
                            </div>
                        )) :
                        vantagens.map((vantagem, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="bg-primary/15 p-4 rounded-full mb-5">
                                    <Icon iconNode={vantagem.icon} className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">{vantagem.title}</h3>
                                <p className="text-sm text-muted-foreground">{vantagem.description}</p>
                            </div>
                        ))
                    } */}
                    {vantagens.map((vantagem, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="bg-primary/15 p-4 rounded-full mb-5">
                                <Icon iconNode={vantagem.icon} className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium mb-2">{vantagem.title}</h3>
                            <p className="text-sm text-muted-foreground">{vantagem.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cotação via WhatsApp - Com Banner */}
            <div className="bg-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
                    <img
                        src="/static/img/og-banner-caminhao-pecas.webp"
                        alt="Background"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="mx-auto max-w-4xl px-4 py-16 relative z-10 text-center">
                    <div className="bg-background/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Não achou o que procura em nosso site?</h3>
                        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Solicite já sua cotação diretamente com nossos vendedores. Teremos prazer em atender sua necessidade específica.
                        </p>
                        <a
                            href="https://wa.me/5511912345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors font-medium text-base gap-2 shadow-md hover:shadow-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                                <path d="M7.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16.5 4h-9A1.5 1.5 0 0 0 6 5.5v7A1.5 1.5 0 0 0 7.5 14Z" />
                            </svg>
                            Falar com um vendedor no WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-white text-black">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
                        <div className="space-y-8">
                            {/*  {loading ? (
                                <Skeleton className="h-12 w-48 mx-auto" />
                            ) : (
                                <>
                                    <Link href="/" prefetch>
                                        <img
                                            src="/logo-completa.webp"
                                            alt="Logo Caminhão Peças"
                                            className="h-auto mx-auto max-w-[270px]"
                                        />
                                    </Link>
                                    <p className="text-sm font-bold text-gray-700 max-w-md mx-auto mt-5">
                                        Solução completa em peças, novas e usadas, para seu caminhão. Variedade, qualidade e preço justo você encontra aqui!
                                    </p>
                                    <div className="space-y-3 text-gray-800">
                                        <div className="flex justify-center items-center">
                                            <Icon iconNode={MapPin} className="h-4 w-4 mr-2 text-black" />
                                            <span className="text-sm">Goiânia, Goiás</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <Icon iconNode={Phone} className="h-4 w-4 mr-2 text-black" />
                                            <span className="text-sm">(62) 9 9643-7241</span>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <Icon iconNode={Mail} className="h-4 w-4 mr-2 text-black" />
                                            <span className="text-sm">contato@caminhaopecas.com.br</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-4 pt-4">
                                        <a
                                            href="https://www.facebook.com/caminhaopecas/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors"
                                        >
                                            <Facebook className="h-5 w-5" />
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/caminhao_pecas/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors"
                                        >
                                            <Instagram className="h-5 w-5" />
                                            <span className="sr-only">Instagram</span>
                                        </a>
                                    </div>
                                </>
                            )} */}
                            <Link href="/" prefetch>
                                <img
                                    src="/logo-completa.webp"
                                    alt="Logo Caminhão Peças"
                                    className="h-auto mx-auto max-w-[270px]"
                                />
                            </Link>
                            <p className="text-sm font-bold text-gray-700 max-w-md mx-auto mt-5">
                                Solução completa em peças, novas e usadas, para seu caminhão. Variedade, qualidade e preço justo você encontra aqui!
                            </p>
                            <div className="space-y-3 text-gray-800">
                                <div className="flex justify-center items-center">
                                    <Icon iconNode={MapPin} className="h-4 w-4 mr-2 text-black" />
                                    <span className="text-sm">Goiânia, Goiás</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Icon iconNode={Phone} className="h-4 w-4 mr-2 text-black" />
                                    <span className="text-sm">(62) 9 9643-7241</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Icon iconNode={Mail} className="h-4 w-4 mr-2 text-black" />
                                    <span className="text-sm">contato@caminhaopecas.com.br</span>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4 pt-4">
                                <a
                                    href="https://www.facebook.com/caminhaopecas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/caminhao_pecas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition-colors"
                                >
                                    <Instagram className="h-5 w-5" />
                                    <span className="sr-only">Instagram</span>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8 text-gray-800">
                            {/* {loading ? (
                                Array(2)
                                    .fill(0)
                                    .map((_, i) => <Skeleton key={i} className="h-6 w-32 mx-auto" />)
                            ) : (
                                <>
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-lg text-black">Categorias</h4>
                                        <nav className="flex flex-col space-y-3">
                                            {footerLinks
                                                .find((g) => g.title === 'Categorias')
                                                ?.links.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        className="text-sm text-gray-700 hover:text-black transition-colors"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                        </nav>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-medium text-lg text-black">Informativo</h4>
                                        <nav className="flex flex-col space-y-3">
                                            {footerLinks
                                                .find((g) => g.title === 'Informativo')
                                                ?.links.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        className="text-sm text-gray-700 hover:text-black transition-colors"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                        </nav>
                                    </div>
                                </>
                            )} */}
                            <div className="space-y-4">
                                <h4 className="font-medium text-lg text-black">Categorias</h4>
                                <nav className="flex flex-col space-y-3">
                                    {footerLinks
                                        .find((g) => g.title === 'Categorias')
                                        ?.links.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="text-sm text-gray-700 hover:text-black transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                </nav>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-medium text-lg text-black">Informativo</h4>
                                <nav className="flex flex-col space-y-3">
                                    {footerLinks
                                        .find((g) => g.title === 'Informativo')
                                        ?.links.map((link) => (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className="text-sm text-gray-700 hover:text-black transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                </nav>
                            </div>
                        </div>

                        <div className="space-y-10 text-gray-800">
                            {/*     {loading ? (
                                Array(2)
                                    .fill(0)
                                    .map((_, i) => <Skeleton key={i} className="h-10 w-48 mx-auto" />)
                            ) : (
                                <>
                                    <div className='mb-5'>
                                        <div className="flex flex-col items-center gap-3">
                                            <img src="/static/img/ssl.png" alt="Certificado 1" className="h-40" />
                                            <img src="/static/img/safe-browsing.png" alt="Certificado 2" className="h-40" />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className="text-sm text-gray-700">Pagamentos aceitos</p>
                                        <div className="flex justify-center gap-3">
                                            <img src="/static/img/cartao.png" alt="Cartão" className="h-12" />
                                            <img src="/static/img/pix.png" alt="Pix" className="h-12" />
                                            <img src="/static/img/boleto.png" alt="Boleto" className="h-12" />
                                        </div>
                                    </div>
                                </>
                            )} */}
                            <div className='mb-5'>
                                <div className="flex flex-col items-center gap-3">
                                    <img src="/static/img/ssl.png" alt="Certificado 1" className="h-40" />
                                    <img src="/static/img/safe-browsing.png" alt="Certificado 2" className="h-40" />
                                </div>
                            </div>
                            <div className='mt-5'>
                                <p className="text-sm text-gray-700">Pagamentos aceitos</p>
                                <div className="flex justify-center gap-3">
                                    <img src="/static/img/cartao.png" alt="Cartão" className="h-12" />
                                    <img src="/static/img/pix.png" alt="Pix" className="h-12" />
                                    <img src="/static/img/boleto.png" alt="Boleto" className="h-12" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-white text-black">
                <div className="mx-auto max-w-5xl px-4 py-8 text-center">
                    <p className="text-xs text-gray-700 mb-2">
                        © {currentYear} Caminhão Peças - Todos os direitos reservados.
                        <br />
                        CNPJ: 00.000.000/0001-00
                    </p>
                    <p className="text-xs text-gray-700">
                        Desenvolvido com 🖤 por{' '}
                        <a
                            href="https://pabloportfolio.site/"
                            target="_blank"
                            className="text-black hover:underline"
                        >
                            Pablo Nogueira
                        </a>
                    </p>
                </div>
            </div>

        </footer>
    );
}