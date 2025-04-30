import { SearchItem } from "@/types";

export const searchItems: SearchItem[] = [
    // Peças de caminhão
    {
      id: "p1",
      title: "Kit Embreagem Completo Volvo FH",
      type: "produto",
      image: "/static/img/products/kit-embreagem-volvo.webp",
      price: 2890.5,
      description: "Kit completo de embreagem para caminhões Volvo FH, compatível com modelos 2015-2023.",
      slug: "kit-embreagem-completo-volvo-fh"
    },
    {
      id: "p2",
      title: "Bomba D'água Scania 124",
      type: "produto",
      image: "/static/img/products/bomba-dagua-scania.webp",
      price: 1250.0,
      description: "Bomba d'água original para motores Scania série 124, alta durabilidade e resistência.",
      slug: "bomba-dagua-scania-124"
    },
    {
      id: "p3",
      title: "Tensor de Correia Mercedes-Benz Axor",
      type: "produto",
      image: "/static/img/products/tensor-correia-mercedes.webp",
      price: 675.9,
      description: "Tensor de correia para Mercedes-Benz Axor, peça nova com garantia de 6 meses.",
      slug: "tensor-correia-mercedes-benz-axor"
    },
    {
      id: "p4",
      title: "Jogo de Juntas Motor MAN TGX",
      type: "produto",
      image: "/static/img/products/juntas-motor-man.webp",
      price: 1890.0,
      description: "Jogo completo de juntas para motor MAN TGX, inclui todos os componentes necessários.",
      slug: "jogo-juntas-motor-man-tgx"
    },
    {
      id: "p5",
      title: "Kit Reparo da Caixa de Direção Ford Cargo",
      type: "produto",
      image: "/static/img/products/reparo-direcao-ford.webp",
      price: 965.75,
      description: "Kit completo para reparo da caixa de direção dos caminhões Ford Cargo 2422 e 2428.",
      slug: "kit-reparo-caixa-direcao-ford-cargo"
    },
    
    // Caminhões para desmanche
    {
      id: "d1",
      title: "Volvo FH 440 2015 para Desmanche",
      type: "desmanche",
      image: "/static/img/desmanche/volvo-fh-440.webp",
      description: "Caminhão Volvo FH 440 ano 2015 disponível para desmanche, documentação regularizada, diversas peças em bom estado.",
      slug: "volvo-fh-440-2015-desmanche"
    },
    {
      id: "d2",
      title: "Scania R440 2018 para Desmanche",
      type: "desmanche",
      image: "/static/img/desmanche/scania-r440.webp",
      description: "Scania R440 2018 para desmanche, peças diversas disponíveis incluindo motor, câmbio e sistema elétrico completos.",
      slug: "scania-r440-2018-desmanche"
    },
    {
      id: "d3",
      title: "Mercedes-Benz Actros 2546 2016 para Desmanche",
      type: "desmanche",
      image: "/static/img/desmanche/mercedes-actros.webp",
      description: "Mercedes-Benz Actros 2546 ano 2016 disponível para desmanche, baixa quilometragem, peças em excelente estado.",
      slug: "mercedes-benz-actros-2546-2016-desmanche"
    },
    {
      id: "d4",
      title: "Iveco Stralis 480 2017 para Desmanche",
      type: "desmanche",
      image: "/static/img/desmanche/iveco-stralis.webp",
      description: "Iveco Stralis 480 2017 para desmanche com peças originais disponíveis, incluindo cabine completa e sistema de freios.",
      slug: "iveco-stralis-480-2017-desmanche"
    },
    {
      id: "d5",
      title: "DAF XF 105 2019 para Desmanche",
      type: "desmanche",
      image: "/static/img/desmanche/daf-xf.webp",
      description: "DAF XF 105 ano 2019 para desmanche, baixa quilometragem, ótimas condições gerais e peças premium disponíveis.",
      slug: "daf-xf-105-2019-desmanche"
    }
  ];