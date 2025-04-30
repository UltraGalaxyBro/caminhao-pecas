<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', subject: app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="referrer" content="same-origin">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Caminhão Peças">
    <meta name="geo.region" content="BR">
    <link rel="canonical" href="https://www.caminhaopecas.com.br">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/favicon.ico">
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>
    <title inertia>{{ config('app.name', 'Caminhão Peças') }}</title>
    <meta name="description" content="Caminhão Peças: Loja online especializada em peças para caminhões de todas as marcas. Frete rápido, produtos de qualidade e preços imbatíveis. Confira agora!">
    <meta name="keywords" content="peças para caminhão, autopeças, caminhões, peças Scania, peças Volvo, peças Mercedes, peças Volkswagen, loja de peças, caminhoneiro, manutenção de caminhão, acessórios para caminhão">
    <meta name="application-name" content="Caminhão Peças">
    <meta name="theme-color" content="#777777">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">

    <!-- Open Graph -->
    <meta property="og:title" content="Caminhão Peças | Peças e Acessórios para Caminhões">
    <meta property="og:description" content="Tudo em peças e acessórios para caminhões. Trabalhamos com as principais marcas do mercado.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.caminhaopecas.com.br">
    <meta property="og:image" content="https://www.caminhaopecas.com.br/images/og-banner-caminhao-pecas.webp">
    <meta property="og:site_name" content="Caminhão Peças">
    <meta property="article:publisher" content="https://www.facebook.com/caminhaopecas">
    <meta property="og:locale" content="pt_BR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Caminhão Peças | Peças e Acessórios para Caminhões">
    <meta name="twitter:description" content="Caminhão Peças: sua loja de confiança para peças e acessórios de caminhão.">
    <meta name="twitter:image" content="https://www.caminhaopecas.com.br/images/twitter-banner-caminhao-pecas.webp">

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Caminhão Peças",
      "description": "Loja online especializada em vender peças, novas e usadas, para caminhões de várias montadoras.",
      "url": "https://www.caminhaopecas.com.br",
      "logo": "https://www.caminhaopecas.com.br/images/logo-caminhao-pecas.png",
      "telephone": "+5562996437241",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goiânia",
        "addressRegion": "GO",
        "addressCountry": "BR"
      }
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/caminhaopecas",
        "https://www.instagram.com/caminhao_pecas"
      ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-black">
    @inertia
</body>
</html>

