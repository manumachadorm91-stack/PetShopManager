// Datos para las categorías de WPC
export const wpcCategories = [
  {
    id: 'interior',
    title: 'WPC Interior',
    description: 'Soluciones de madera compuesta para interiores resistentes y estéticos.',
    imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Paneles y revestimientos de WPC para espacios interiores de alta durabilidad y bajo mantenimiento.',
    longDescription: 'Los productos WPC para interior ofrecen soluciones innovadoras que combinan la calidez visual de la madera con la durabilidad y resistencia del plástico. Ideales para suelos, revestimientos y elementos decorativos en espacios con alto tránsito o exposición a humedad.',
    benefits: [
      'Resistente a manchas y humedad',
      'Fácil instalación y mantenimiento',
      'Apariencia natural de madera',
      'No se deforma ni agrieta',
      'Opciones ecológicas disponibles'
    ]
  },
  {
    id: 'exterior',
    title: 'WPC Exterior',
    description: 'Materiales de WPC para exteriores con resistencia a la intemperie y durabilidad superior.',
    imageSrc: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Soluciones de WPC para terrazas, fachadas y espacios exteriores con alta durabilidad y resistencia a condiciones climáticas extremas.',
    longDescription: 'Nuestros productos WPC para exterior están diseñados para resistir condiciones climáticas adversas, rayos UV, humedad y cambios de temperatura mientras mantienen su apariencia estética. Perfectos para terrazas, pérgolas, cercas y revestimientos de fachadas.',
    benefits: [
      'Resistente a rayos UV y decoloración',
      'No requiere barnizado ni pintura',
      'Resistente al agua y humedad',
      'No se pudre ni es atacado por insectos',
      'Bajo mantenimiento y larga vida útil'
    ]
  },
  {
    id: 'accesorios',
    title: 'Accesorios WPC',
    description: 'Complementos y accesorios para instalaciones de WPC interior y exterior.',
    imageSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Elementos complementarios para instalaciones de WPC que aseguran acabados perfectos y mayor durabilidad.',
    longDescription: 'Nuestra línea de accesorios WPC incluye todos los elementos necesarios para asegurar instalaciones profesionales y acabados perfectos. Desde clips de fijación hasta perfiles de terminación, estos accesorios están diseñados específicamente para complementar nuestros productos de WPC.',
    benefits: [
      'Perfecta compatibilidad con productos WPC',
      'Fácil instalación y ajuste',
      'Mayor durabilidad de las instalaciones',
      'Acabados profesionales',
      'Soluciones para cada tipo de proyecto'
    ]
  }
];

// Datos para productos de WPC por categoría
export const wpcProducts = {
  interior: [
    {
      id: 'panel-decorativo',
      title: 'Panel Decorativo WPC',
      description: 'Paneles decorativos para paredes interiores con diseños modernos',
      imageSrc: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Resistente al agua', 'Ignífugo', 'Fácil instalación', 'Aislante acústico'],
      applications: ['Salas', 'Restaurantes', 'Oficinas', 'Comercios'],
      specifications: {
        dimensions: '2.4m x 0.2m x 9mm',
        material: 'WPC (60% madera, 40% polímero)',
        weight: '7.2 kg/m²',
        colors: ['Roble natural', 'Nogal', 'Wengue', 'Blanco vintage']
      },
      details: 'Los paneles decorativos WPC son una solución moderna para revestimientos de paredes interiores. Con una apariencia natural de madera pero con las ventajas del compuesto plástico, estos paneles son ideales para crear ambientes cálidos y estéticos sin los problemas de mantenimiento de la madera tradicional.'
    },
    {
      id: 'suelo-interior',
      title: 'Suelo WPC Interior',
      description: 'Suelos laminados de WPC para áreas interiores con alto tránsito',
      imageSrc: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Antideslizante', 'Resistente a impactos', 'Antibacteriano', 'Sistema click'],
      applications: ['Viviendas', 'Hoteles', 'Centros comerciales', 'Gimnasios'],
      specifications: {
        dimensions: '1.2m x 0.15m x 8mm',
        material: 'WPC de alta densidad',
        weight: '8.5 kg/m²',
        colors: ['Arce', 'Cerezo', 'Gris vintage', 'Caoba']
      },
      details: 'El suelo de WPC para interiores combina la belleza de la madera natural con la durabilidad del plástico. Su sistema de instalación click lo hace fácil de instalar y su estructura resistente al agua lo hace ideal para cualquier espacio interior, incluso en zonas húmedas como baños o cocinas.'
    },
    {
      id: 'zocalo-wpc',
      title: 'Zócalos y Molduras WPC',
      description: 'Acabados perfectos para instalaciones de suelos y paredes',
      imageSrc: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1582582621959-48d27397dc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Resistente a golpes', 'Impermeable', 'No necesita pintura', 'Fácil limpieza'],
      applications: ['Complemento para suelos', 'Transiciones', 'Escaleras', 'Acabados'],
      specifications: {
        dimensions: 'Varias según modelo',
        material: 'WPC moldeado',
        weight: '1.2 kg/m',
        colors: ['Combinables con suelos']
      },
      details: 'Las molduras y zócalos de WPC proporcionan el acabado perfecto para sus instalaciones de suelo. Fabricados con el mismo material que nuestros suelos, garantizan una perfecta combinación estética y las mismas ventajas de durabilidad y resistencia al agua.'
    }
  ],
  exterior: [
    {
      id: 'deck-exterior',
      title: 'Deck WPC Exterior',
      description: 'Tarima para exteriores resistente a la intemperie y UV',
      imageSrc: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Antideslizante', 'Resistente a UV', 'No se astilla', 'Bajo mantenimiento'],
      applications: ['Terrazas', 'Piscinas', 'Jardines', 'Pasarelas'],
      specifications: {
        dimensions: '2.2m x 0.14m x 22mm',
        material: 'WPC con protección UV',
        weight: '19.5 kg/m²',
        colors: ['Teka', 'Gris', 'Chocolate', 'Arena']
      },
      details: 'Nuestro deck de WPC para exteriores está diseñado para resistir las condiciones climáticas más adversas. Resistente a rayos UV, lluvias, nieve y cambios de temperatura, este producto mantiene su aspecto y funcionalidad durante años con un mínimo mantenimiento. Su superficie antideslizante lo hace seguro incluso en condiciones húmedas.'
    },
    {
      id: 'fachada-wpc',
      title: 'Revestimiento Fachada WPC',
      description: 'Sistema de revestimiento para fachadas de edificios',
      imageSrc: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Alta durabilidad', 'Resistente al fuego', 'Aislante térmico', 'Ventilado'],
      applications: ['Fachadas', 'Cerramientos', 'Espacios comerciales', 'Edificios'],
      specifications: {
        dimensions: '3m x 0.15m x 12mm',
        material: 'WPC reforzado',
        weight: '9.8 kg/m²',
        colors: ['Madera natural', 'Carbon', 'Terracota', 'Silver']
      },
      details: 'El sistema de fachada ventilada WPC ofrece una solución duradera y estética para el revestimiento de edificios. Proporciona aislamiento térmico adicional, protección contra la intemperie y una apariencia moderna. Su sistema de instalación permite la ventilación adecuada, evitando problemas de humedad.'
    },
    {
      id: 'pergola-wpc',
      title: 'Pérgolas y Celosías WPC',
      description: 'Estructuras decorativas para jardines y espacios exteriores',
      imageSrc: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Resistente al viento', 'No requiere pintura', 'Fácil montaje', 'Personalizable'],
      applications: ['Jardines', 'Patios', 'Separadores', 'Porches'],
      specifications: {
        dimensions: 'Personalizables según proyecto',
        material: 'WPC estructural',
        weight: 'Variable según diseño',
        colors: ['Marrón oscuro', 'Gris claro', 'Vintage']
      },
      details: 'Nuestras pérgolas y celosías de WPC añaden un toque decorativo a cualquier espacio exterior mientras proporcionan sombra y privacidad. Fabricadas con WPC estructural, ofrecen la apariencia natural de la madera pero con una durabilidad muy superior y sin necesidad de mantenimiento regular como barnizado o protección.'
    }
  ],
  accesorios: [
    {
      id: 'clips-fijacion',
      title: 'Clips de Fijación',
      description: 'Sistema de fijación invisible para instalación de tarimas',
      imageSrc: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Invisible', 'Acero inoxidable', 'Fácil instalación', 'Durable'],
      applications: ['Instalación de deck', 'Tarimas', 'Exterior e interior'],
      specifications: {
        dimensions: '27mm x 11mm x 9mm',
        material: 'Acero inoxidable y plástico reforzado',
        incluye: '50 clips, 50 tornillos y llave allen',
        compatibilidad: 'Universal para tarimas WPC'
      },
      details: 'Los clips de fijación invisible permiten instalar tarimas WPC sin tornillos visibles, logrando un acabado estético perfecto. Fabricados en acero inoxidable, resisten la corrosión incluso en ambientes húmedos o salinos. Su diseño facilita la instalación y permite la expansión natural del material.'
    },
    {
      id: 'perfiles-terminacion',
      title: 'Perfiles de Terminación',
      description: 'Soluciones para remates y acabados de instalaciones WPC',
      imageSrc: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Versatilidad', 'Fácil corte', 'Diseño a juego', 'Resistente'],
      applications: ['Bordes de terraza', 'Escalones', 'Cambios de nivel', 'Remates'],
      specifications: {
        dimensions: '2.2m x 6cm x 1cm',
        material: 'WPC',
        peso: '1.8 kg/m',
        colores: 'Combinables con productos WPC'
      },
      details: 'Los perfiles de terminación son indispensables para lograr acabados profesionales en instalaciones de WPC. Disponibles en varios diseños (recto, en L, de escalón), estos perfiles garantizan un resultado estético y funcional, cubriendo bordes y proporcionando transiciones suaves entre diferentes superficies.'
    },
    {
      id: 'tornilleria-especial',
      title: 'Tornillería Especial WPC',
      description: 'Tornillos y fijaciones específicas para instalaciones WPC',
      imageSrc: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      detailImages: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'],
      features: ['Anticorrosión', 'Autorroscantes', 'Cabeza avellanada', 'Alta resistencia'],
      applications: ['Fijación directa', 'Subestructuras', 'Instalaciones interiores y exteriores'],
      specifications: {
        dimensiones: 'Varios tamaños disponibles',
        material: 'Acero inoxidable A2',
        incluye: 'Puntas de atornillador compatibles',
        acabado: 'Disponibles en varios colores para combinar'
      },
      details: 'Nuestra tornillería especializada para WPC está diseñada para proporcionar una fijación segura sin dañar el material. Los tornillos autorroscantes con paso específico previenen agrietamientos y garantizan una sujeción duradera. Disponibles en diferentes acabados para mimetizarse con el color de la instalación.'
    }
  ]
};