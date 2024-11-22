// chatbot.js

document.addEventListener('DOMContentLoaded', (event) => {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotModal = document.getElementById('chatbotModal');
    const closeChatbotModal = document.getElementById('closeChatbotModal');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    const propertyInfo = {
        samborondon: {
            title: "Terrenos en Venta o Alquiler en Samborondón",
            description: "Con una ubicación estratégica cerca de nuevo Country Club, Todo Nuevo Samborondon, Zonas industriales. Ofrecemos terrenos de diferentes tamaños y formas, con fácil acceso a carreteras y autopistas, en un vecindario tranquilo y seguro.",
            price: "A consultar",
            area: "Varía según el lote"
        },
        cuenca: {
            title: "Departamentos en Cuenca",
            description: "Oportunidad única de invertir en Cuenca. Departamentos de 2 y 3 habitaciones, ideales para Airbnb.",
            price: "Desde $150,000",
            area: "80-120 m²"
        },
        nuevaSamborondon: {
            title: "Departamentos en Nuevo Samborondon",
            description: "Hermosos departamentos en la exclusiva zona de Nuevo Samborondón. 2 habitaciones, 2 baños modernos, áreas sociales.",
            price: "Desde $200,000",
            area: "90-110 m²"
        },
        islaMocoli: {
            title: "Departamentos en Isla Mocoli",
            description: "Proyecto exclusivo de departamentos de 3 habitaciones en Isla Mocoli. Vistas impresionantes.",
            price: "Desde $300,000",
            area: "120-150 m²"
        },
        localesComerciales: {
            title: "Locales Comerciales en Nuevo Samborondon",
            description: "Oportunidad única de invertir en locales comerciales. Ubicación estratégica con alto tráfico.",
            price: "Desde $500,000",
            area: "50-200 m²"
        },
        consultoriosMedicos: {
            title: "Consultorios Médicos en Nuevo Samborondon",
            description: "Espacios amplios y bien iluminados, con equipamiento médico de alta calidad.",
            price: "Desde $250,000",
            area: "40-100 m²"
        },
        casasPersonalizadas: {
            title: "Casas Personalizadas",
            description: "Hacemos realidad tu sueño de tener una casa perfecta. Diseño personalizado y materiales de alta calidad.",
            price: "A consultar",
            area: "Personalizable"
        },
        casole: {
            title: "Casole - Una Experiencia de Vida Única",
            description: "Proyecto que redefine la vida moderna con inspiración mediterránea, ofreciendo un estilo sofisticado y cercano a la naturaleza. Combina diseño innovador, comunidad, y proximidad estratégica para elevar tu calidad de vida.",
            price: "A consultar",
            area: "Varía según la unidad"
        },
        acquaShops: {
            title: "ACQUA SHOPS - Desarrollo Comercial en Guayaquil",
            description: `ACQUA SHOPS es parte del proyecto Acqua Gardens, una ciudad vibrante, segura, sostenible y conectada. Es una plaza comercial en el corazón del proyecto, diseñada para ser el centro de encuentro para familias, amigos, visitantes y negocios. Características destacadas:

            - Ubicación estratégica en la Av. del Bombero, Guayaquil
            - Parte de un complejo con 358 familias residentes, 120 habitaciones de hotel, y 45 empresas
            - Más de 100,000 personas pasan diariamente frente al proyecto
            - Diseño vibrante con imponentes fuentes que serán un ícono de Guayaquil
            - Tecnología avanzada: cableado estructurado, internet de alta velocidad, y APP Acqua Gardens
            - Respaldado por PRONOBIS, COLONCORP y MOBILSOL
            - Ofrece excelente retorno de inversión y plusvalía
            - Administración profesional que maximiza la rentabilidad del propietario`,
            price: "Consultar para opciones de inversión",
            area: "Varios tamaños de locales comerciales disponibles",
            amenities: [
                "Fuentes icónicas",
                "APP para servicios del condominio",
                "Cableado estructurado",
                "Internet de alta velocidad",
                "Administración profesional",
                "Ubicación estratégica"
            ],
            investmentBenefits: [
                "Mayor retorno y plusvalía que otras inversiones inmobiliarias",
                "Renta neta (impuestos ya pagados)",
                "Plusvalía anual del inmueble",
                "Administración experta sin preocupaciones para el propietario"
            ],
            technicalSpecs: [
                "Estructura de hormigón armado o metálica",
                "Losa de hormigón armado",
                "Instalaciones eléctricas empotradas (110V y 220V)",
                "Sistema central de cisterna y bombas",
                "Espacio para climatización y extracción de olores",
                "Sistemas de seguridad y contra incendios"
            ]
        },
        plazole: {
            title: "PLAZOLE - Plaza Innovadora en Samborondón",
            description: `PLAZOLE es una nueva plaza innovadora donde los espacios y la creatividad se fusionan para ofrecer una experiencia única. Ubicada estratégicamente en el kilómetro 10.5 vía Samborondón, Plazole va más allá del concepto comercial convencional.`,
            features: [
                "Oficinas modernas",
                "Variada selección de restaurantes",
                "Diversas tiendas",
                "Ambiente divertido y seguro",
                "Concepto innovador que fusiona espacios y creatividad"
            ],
            location: "Kilómetro 10.5 vía Samborondón",
            uniqueSellingPoint: "Fusión de espacios comerciales y creatividad para una experiencia única",
            contactLink: "https://wa.link/ez23er"
        },
        ciudadQuinceMinutos: {
            title: "Ciudad de 15 Minutos en Nuevo Samborondón",
            description: `La "Ciudad de 15 Minutos" es un concepto revolucionario que ha llegado para transformar la forma en que vivimos y nos relacionamos con nuestro entorno. Este nuevo proyecto urbano en Nuevo Samborondón busca crear una ciudad moderna y vibrante, diseñada para ofrecer una experiencia de vida conveniente y accesible para sus residentes.`,
            features: [
                "Todo lo necesario a 15 minutos de distancia",
                "Torre de locales comerciales con variedad de tiendas, restaurantes y servicios",
                "Torre médica con servicios de salud de alta calidad",
                "Torre de departamentos de uno, dos y tres dormitorios",
                "Mejor ubicación y precios del mercado",
                "Diseño con altos estándares de calidad y comodidad"
            ],
            benefits: [
                "Ahorro de tiempo en desplazamientos",
                "Mayor comodidad en el día a día",
                "Acceso a servicios de salud especializados",
                "Variedad de opciones de vivienda",
                "Entorno seguro y atractivo"
            ],
            location: "Nuevo Samborondón",
            uniqueSellingPoint: "Concepto de ciudad moderna que integra vivienda, comercio y servicios en un radio de 15 minutos",
            contactLink: "https://wa.link/ez23er"
        }
    };

    const investmentInfo = {
        samborondon: "Samborondón es una zona exclusiva con excelente potencial de rentabilidad a largo plazo. Con un crecimiento constante y una demanda siempre en aumento, es ideal para inversiones inmobiliarias.",
        eeuu: "Tenemos opciones para inversión o para residencia en : Miami, Orlando y otras ciudades. Para mas información da click en Janneth Aguirre BIENES RAICES, https://wa.link/ez23er",
        panama: `Panamá se perfila como un país con amplia oferta de oportunidades para nacionales y extranjeros, gracias a elementos de índices saludables como:
        - Crecimiento de la economía en un 10.8% del Producto Interno Bruto (PIB) en 2022
        - Inflación de 2.9%
        - Según el último informe de la Cepal, Panamá (5,1%) liderará el crecimiento económico de la región en 2023
        
        Panamá ofrece beneficios fiscales y una economía dolarizada para inversionistas. Su ubicación estratégica y el creciente mercado inmobiliario lo convierten en un destino atractivo para inversiones.
        
        Algunas oportunidades de inversión en Panamá incluyen:
        1. PANAMA VIEJO RESIDENCES: https://wa.link/47tcah
        2. LIVING 73: https://www.jannethaguirrebienesraices.com/proyecto-living-73/
        3. THE HUB: https://www.jannethaguirrebienesraices.com/proyecto-the-hub/
        4. BE LIVING: https://www.jannethaguirrebienesraices.com/proyecto-be-living/
           VISTA 3D BE LIVING: https://storage.googleapis.com/gbv/beliving/index.html
        
        ¿Te gustaría más información sobre alguno de estos proyectos en particular?`,
        ecuador: `Ecuador, con su diversidad geográfica y economía estable, se ha convertido en un destino ideal para la inversión en bienes raíces. Razones principales:
        1. Crecimiento Económico Sostenible
        2. Diversidad Geográfica
        3. Costos Competitivos
        4. Incentivos Gubernamentales
        5. Turismo en Auge
        6. Estabilidad Jurídica
        7. Potencial de Valorización
        Invertir en Ecuador combina estabilidad, rentabilidad y un entorno único, brindando tanto seguridad financiera como acceso a su riqueza natural y cultural.`
    };

    const services = [
        "Asesoría inmobiliaria personalizada",
        "Gestión de propiedades",
        "Inversiones internacionales",
        "Financiamiento y créditos hipotecarios",
        "Servicios legales y notariales",
        "Valuación de propiedades",
        "Diseño y remodelación de interiores",
        "Asesoría en inversiones Airbnb"
    ];

    const companyInfo = {
        jannethAguirre: {
            name: "Janneth Aguirre",
            title: "Corredora de Bienes Raíces",
            experience: "Líder en el ramo desde 2009",
            description: `Janneth Aguirre es una representante inmobiliaria líder en su ramo desde 2009. Se ha consolidado como una reconocida Corredora de Bienes Raíces dentro del mercado ecuatoriano gracias a la satisfacción lograda entre sus clientes por los diversos servicios que presta.`,
            recognition: "Reconocimiento internacional por sistema de calidad y trabajo",
            values: ["Honradez", "Responsabilidad", "Profesionalismo"],
            mission: "Ofrecer a nuestros clientes un servicio de asesoría inmobiliaria profesional, confiable y personalizada para satisfacer sus necesidades de venta, compra o arrendamiento.",
            contact: "https://wa.link/ez23er"
        }
    };

    let conversationContext = {
        lastTopic: null,
        propertyInterest: null,
        investmentInterest: null,
        serviceInterest: null
    };

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('mb-4', sender === 'user' ? 'text-right' : 'text-left');
        messageElement.innerHTML = `
            <div class="inline-block p-2 rounded-lg ${sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}">
                ${message}
            </div>
        `;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addSuggestionButtons(suggestions) {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('mb-4', 'text-center');
        suggestionElement.innerHTML = suggestions.map(suggestion => 
            `<button class="bg-primary text-white px-3 py-1 rounded mr-2 mb-2 suggestion-btn">${suggestion}</button>`
        ).join('');
        chatMessages.appendChild(suggestionElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Add click event listeners to suggestion buttons
        suggestionElement.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.textContent;
                addMessage(message, 'user');
                handleUserInput(message);
            });
        });
    }

    async function getChatbotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Simular delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (lowerMessage.includes('propiedad') || lowerMessage.includes('casa') || lowerMessage.includes('departamento') || lowerMessage.includes('terreno')) {
            conversationContext.lastTopic = 'property';
            return "Tenemos varias propiedades disponibles. ¿Te interesa alguna zona en particular? Tenemos opciones en Samborondón, Cuenca, Nuevo Samborondón, Isla Mocoli, ACQUA SHOPS, PLAZOLE, y más.";
        } else if (lowerMessage.includes('samborondon')) {
            conversationContext.propertyInterest = 'samborondon';
            const property = propertyInfo.samborondon;
            return `En Samborondón tenemos ${property.title}. ${property.description} El precio es ${property.price} y tiene un área de ${property.area}. ¿Te gustaría más información o programar una visita?`;
        } else if (lowerMessage.includes('cuenca')) {
            conversationContext.propertyInterest = 'cuenca';
            const property = propertyInfo.cuenca;
            return `En Cuenca ofrecemos ${property.title}. ${property.description} Los precios comienzan en ${property.price} y las áreas van desde ${property.area}. ¿Quieres saber más sobre las opciones de inversión en Cuenca?`;
        } else if (lowerMessage.includes('casole')) {
            conversationContext.propertyInterest = 'casole';
            const property = propertyInfo.casole;
            return `${property.title}: ${property.description} ¿Te gustaría conocer más detalles sobre este proyecto único?`;
        } else if (lowerMessage.includes('acqua') || lowerMessage.includes('shops') || lowerMessage.includes('guayaquil')) {
            conversationContext.propertyInterest = 'acquaShops';
            const property = propertyInfo.acquaShops;
            return `${property.title}: ${property.description} 
            
            Características principales:
            - Precio: ${property.price}
            - Área: ${property.area}
            - Amenidades: ${property.amenities.join(', ')}
            
            Beneficios de inversión:
            ${property.investmentBenefits.map(benefit => `- ${benefit}`).join('\n')}
            
            ¿Te gustaría más información sobre las especificaciones técnicas o los beneficios de inversión en ACQUA SHOPS?`;
        } else if (lowerMessage.includes('plazole') || lowerMessage.includes('plaza innovadora') || lowerMessage.includes('samborondon')) {
            const property = propertyInfo.plazole;
            return `${property.title}: ${property.description}

            Características principales de PLAZOLE:
            ${property.features.map(feature => `- ${feature}`).join('\n')}

            Ubicación: ${property.location}

            Lo que hace único a PLAZOLE: ${property.uniqueSellingPoint}

            ¿Te gustaría más información sobre las oportunidades de inversión en PLAZOLE o hablar con una asesora? Puedes contactar directamente a nuestra asesora haciendo clic aquí: ${property.contactLink}`;
        } else if (lowerMessage.includes('ciudad de 15 minutos') || lowerMessage.includes('nuevo samborondon') || lowerMessage.includes('proyecto urbano')) {
            const property = propertyInfo.ciudadQuinceMinutos;
            return `${property.title}: ${property.description}

            Características principales del proyecto "Ciudad de 15 Minutos":
            ${property.features.map(feature => `- ${feature}`).join('\n')}

            Beneficios para los residentes:
            ${property.benefits.map(benefit => `- ${benefit}`).join('\n')}

            Ubicación: ${property.location}

            Lo que hace único a este proyecto: ${property.uniqueSellingPoint}

            Samborondón es considerado por muchos como un lugar seguro y atractivo para vivir. Muchas personas buscan vivir en este cantón.

            ¿Te gustaría más información sobre las oportunidades de inversión en este proyecto o hablar con una asesora? Puedes contactar directamente a nuestra asesora haciendo clic aquí: ${property.contactLink}`;
        } else if (lowerMessage.includes('inversion') || lowerMessage.includes('invertir')) {
            conversationContext.lastTopic = 'investment';
            return "Ofrecemos oportunidades de inversión en Ecuador, Estados Unidos y Panamá. ¿En qué país te interesaría invertir?";
        } else if (lowerMessage.includes('estados unidos') || lowerMessage.includes('eeuu')) {
            conversationContext.investmentInterest = 'eeuu';
            return investmentInfo.eeuu;
        } else if (lowerMessage.includes('panama')) {
            conversationContext.investmentInterest = 'panama';
            return investmentInfo.panama;
        } else if (lowerMessage.includes('ecuador')) {
            conversationContext.investmentInterest = 'ecuador';
            return investmentInfo.ecuador;
        } else if (lowerMessage.includes('servicio')) {
            conversationContext.lastTopic = 'service';
            return `Ofrecemos varios servicios, incluyendo: ${services.join(', ')}. ¿En cuál estás interesado? Puedo darte más detalles sobre cualquiera de ellos.`;
        } else if (lowerMessage.includes('janneth') || lowerMessage.includes('aguirre') || lowerMessage.includes('empresa') || lowerMessage.includes('compañía')) {
            const info = companyInfo.jannethAguirre;
            return `${info.name} es una ${info.title} con amplia experiencia, ${info.experience}. 

            ${info.description}

            Nuestra empresa cuenta con ${info.recognition}. Nos basamos en los valores de ${info.values.join(', ')}, lo que nos ha permitido lograr un amplio reconocimiento por nuestro trabajo ético y confiable.

            Nuestra misión es: ${info.mission}

            Para más información o para contactar directamente con Janneth Aguirre BIENES RAICES, puedes usar este enlace: ${info.contact}

            ¿Te gustaría saber más sobre nuestros servicios o propiedades disponibles?`;
        } else if (lowerMessage.includes('contacto') || lowerMessage.includes('agente') || lowerMessage.includes('asesora')) {
            const contactInfo = companyInfo.jannethAguirre.contact;
            return `Para hablar directamente con nuestra asesora principal, Janneth Aguirre, puedes hacer clic aquí: ${contactInfo}. Estaremos encantados de atenderte personalmente y ayudarte con cualquier consulta inmobiliaria que tengas.`;
        } else if (lowerMessage.includes('gracias') || lowerMessage.includes('adios')) {
            return "Ha sido un placer ayudarte. Si tienes más preguntas en el futuro, no dudes en volver a contactarnos. ¡Que tengas un excelente día!";
        } else {
            return "Lo siento, no tengo una respuesta específica para esa pregunta. ¿Te gustaría que te conecte con una asesora a través de WhatsApp para obtener más información? O puedo contarte sobre nuestras propiedades, inversiones o servicios.";
        }
    }

    async function handleUserInput(message) {
        const response = await getChatbotResponse(message);
        addMessage(response, 'bot');

        // Sugerir opciones después de la respuesta
        let suggestions = [];
        if (conversationContext.lastTopic === 'property') {
            suggestions = ['Samborondón', 'Cuenca', 'Nuevo Samborondón', 'Isla Mocoli', 'Casole', 'ACQUA SHOPS', 'PLAZOLE', 'Ciudad de 15 Minutos'];
        } else if (conversationContext.lastTopic === 'investment') {
            suggestions = ['Ecuador', 'Estados Unidos', 'Panamá'];
        } else if (conversationContext.lastTopic === 'service') {
            suggestions = ['Asesoría inmobiliaria', 'Gestión de propiedades', 'Inversiones internacionales'];
        } else {
            suggestions = ['Propiedades', 'Inversiones', 'Servicios', 'Sobre Janneth Aguirre', 'Contactar asesora'];
        }

        setTimeout(() => {
            addSuggestionButtons(suggestions);
        }, 1000);
    }

    chatbotButton.addEventListener('click', () => {
        chatbotModal.classList.remove('hidden');
    });

    closeChatbotModal.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            await handleUserInput(message);
        }
    });

    // Mensaje inicial del chatbot
    addMessage("¡Hola! Soy ARIA, tu asistente virtual IA de Janneth Aguirre BIENES RAICES. Estoy aquí para ayudarte con información sobre nuestras propiedades, oportunidades de inversión y servicios. ¿En qué puedo asistirte hoy?", 'bot');

    // Sugerir opciones iniciales
    setTimeout(() => {
        addSuggestionButtons(['Propiedades', 'Inversiones', 'Servicios', 'Sobre Janneth Aguirre', 'PLAZOLE', 'Ciudad de 15 Minutos', 'Contactar asesora']);
    }, 2000);
});

console.log('Chatbot script loaded successfully');

