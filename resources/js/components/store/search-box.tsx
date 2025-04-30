import { useState, useEffect, useRef } from "react";
import { SearchItem } from "@/types";
import { searchItems } from "@/data/search-items";
import { useDebounce } from "@/hooks/use-debounce";
import { SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from "@/components/ui/sheet";
import { Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface SearchBoxProps {
    isMobile?: boolean;
}

export function SearchBox({ isMobile = false }: SearchBoxProps) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 300);
    const inputRef = useRef<HTMLInputElement>(null);
    const commandRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && isMobile && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open, isMobile]);

    useEffect(() => {
        if (debouncedSearchTerm.trim() === "") {
            setResults([]);
            return;
        }

        const filteredItems = searchItems.filter(item =>
            item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );

        setResults(filteredItems);
    }, [debouncedSearchTerm]);

    const handleClear = () => {
        setSearchTerm("");
        inputRef.current?.focus();
    };

    const handleSelect = (item: SearchItem) => {
        setSearchTerm("");
        setOpen(false);
        // In a real app, you would navigate to the item page
        // window.location.href = `/${item.type === 'produto' ? 'produtos' : 'desmanche'}/${item.slug}`;
    };

    const formatPrice = (price?: number) => {
        if (!price) return "";
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    };

    // Desktop
    if (!isMobile) {
        return (
            <div ref={commandRef} className="relative w-full max-w-lg">
                <div className="relative flex items-center">
                    <SearchIcon className="absolute left-3 h-4 w-4 shrink-0 opacity-50" />
                    <Input
                        ref={inputRef}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Insira o nome ou código da peça de caminhão..."
                        className="pl-10 pr-10 h-9"
                    />
                    {searchTerm.length > 0 && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 h-9 w-9"
                            onClick={handleClear}
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Limpar busca</span>
                        </Button>
                    )}
                </div>

                {searchTerm.trim() !== "" && (
                    <div className="absolute top-full z-50 w-full mt-1 rounded-md border bg-background shadow-md">
                        {results.length === 0 ? (
                            <div className="px-4 py-8 text-center">
                                <p className="text-sm text-muted-foreground">Nenhum resultado encontrado</p>
                            </div>
                        ) : (
                            <div className="max-h-[80vh] overflow-auto">
                                <div className="py-2 px-2">
                                    <h3 className="mb-2 px-2 font-medium text-sm text-muted-foreground">
                                        Resultados ({results.length})
                                    </h3>

                                    <ScrollArea className="h-[300px] w-full space-y-2">
                                        {results.map((item) => (
                                            <Link
                                                key={item.id}
                                                href={`/${item.type === 'produto' ? 'produtos' : 'desmanche'}/${item.slug}`}
                                                className="flex items-center gap-3 p-2 hover:bg-muted rounded-md"
                                                onClick={() => handleSelect(item)}
                                            >
                                                <div className="h-14 w-14 rounded bg-muted flex-shrink-0 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <Badge
                                                            variant={item.type === 'produto' ? "outline" : "secondary"}
                                                            className="text-xs"
                                                        >
                                                            {item.type === 'produto' ? 'Peça' : 'Desmanche'}
                                                        </Badge>
                                                    </div>
                                                    <h4 className="text-sm font-medium mt-1">{item.title}</h4>
                                                    {item.price && (
                                                        <p className="text-sm font-bold text-primary mt-1">
                                                            {formatPrice(item.price)}
                                                        </p>
                                                    )}
                                                </div>
                                            </Link>
                                        ))}
                                    </ScrollArea>
                                </div>

                                <div className="p-2 border-t">
                                    <Link
                                        href={`/busca?q=${encodeURIComponent(searchTerm)}`}
                                        className="flex w-full items-center justify-center rounded-md bg-primary p-2 text-sm font-medium text-primary-foreground"
                                    >
                                        Ver todos os resultados
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // Mobile
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <SearchIcon className="size-5" />
                    <span className="sr-only">Pesquisar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-screen sm:h-[85vh] w-full p-0 border-t">
                <SheetTitle className="sr-only">Buscar produtos</SheetTitle>
                <SheetHeader className="px-4 py-3 border-b">
                    <SheetDescription className="sr-only">
                        Área de busca de produtos ou caminhões p/ desmanche.
                    </SheetDescription>
                    <div className="flex items-center gap-2">
                        <SearchIcon className="h-4 w-4 shrink-0 opacity-50" />
                        <Input
                            ref={inputRef}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Procurar peças para caminhão..."
                            className="flex h-9 w-full border-0 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                </SheetHeader>

                {searchTerm.trim() !== "" && (
                    <ScrollArea className="h-full py-2">
                        {results.length === 0 ? (
                            <div className="px-4 py-8 text-center">
                                <p className="text-sm text-muted-foreground">Nenhum resultado encontrado</p>
                            </div>
                        ) : (
                            <div className="divide-y">
                                {results.length > 0 && (
                                    <div className="py-2 px-4">
                                        <h3 className="mb-2 font-medium text-sm text-muted-foreground">
                                            Resultados ({results.length})
                                        </h3>
                                        <div className="space-y-4">
                                            {results.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={`/${item.type === 'produto' ? 'produtos' : 'desmanche'}/${item.slug}`}
                                                    className="flex items-center gap-3"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <div className="h-16 w-16 rounded bg-muted flex-shrink-0 overflow-hidden">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2">
                                                            <Badge
                                                                variant={item.type === 'produto' ? "outline" : "secondary"}
                                                                className="text-xs"
                                                            >
                                                                {item.type === 'produto' ? 'Peça' : 'Desmanche'}
                                                            </Badge>
                                                        </div>
                                                        <h4 className="text-sm font-medium mt-1">{item.title}</h4>
                                                        {item.price && (
                                                            <p className="text-sm font-bold text-primary mt-1">
                                                                {formatPrice(item.price)}
                                                            </p>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="p-4">
                                    <Link
                                        href={`/busca?q=${encodeURIComponent(searchTerm)}`}
                                        className="flex w-full items-center justify-center rounded-md bg-primary p-3 text-sm font-medium text-primary-foreground"
                                        onClick={() => setOpen(false)}
                                    >
                                        Ver todos os resultados
                                    </Link>
                                </div>
                            </div>
                        )}
                    </ScrollArea>
                )}
            </SheetContent>
        </Sheet>
    );
}