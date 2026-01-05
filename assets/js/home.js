const carsData = [
    {
        id: 1,
        title: "FORD RS 200 - GROUP B DE RALLY",
        description: "Contava com motor central traseiro e tração integral. Era um modelo altamente competitivo, pesava aproximadamente 1000 kg e a nível de motorização contava com um 1.8 litros turbo...",
        date: "1 de outubro de 2025",
        category: "wrc",
        image: "assets/img/rally_ford_rs200.png"
    },

    {
        id: 2,
        title: "MITSUBISHI ECLIPSE - O VERDE DA VELOCIDADE",
        description: "Equipado com um motor 2.0 litros turbo de quatro cilindros e tração dianteira, o Eclipse apresentava cerca de 280 cavalos. Preparado para arrancadas, contava com sistema...",
        date: "2 de outubro de 2025",
        category: "rua",
        image: "assets/img/rua_mitsubishi_eclipse.png"
    },

    {
        id: 3,
        title: "AUDI QUATTRO S1 - O ÍCONE DE UMA ERA",
        description: "A nível de motor o carro equipava um bloco com 5 cilindros em linha turbo com 2.1 litros de cilindrada e que produzia cerca de 540 cavalos. Com a famosa tração integral quattro...",
        date: "15 de outubro de 2025",
        category: "wrc",
        image: "assets/img/rally_audi_quattro.png"
    },
    
    {
        id: 4,
        title: "TOYOTA SUPRA - REI DAS RUAS",
        description: "Movido por um seis-em-linha 3.0 litros com turbo duplo, o Supra entregava mais de 320 cavalos nas ruas. Após a preparação, recebeu turbos maiores, intercooler reforçado e ajustes...",
        date: "9 de outubro de 2025",
        category: "rua",
        image: "assets/img/rua_toyota_supra.png"
    },

    {
        id: 5,
        title: "O LANCIA MAIS POTENTE DE TODOS, DELTA S4",
        description: "Este contava com um pequeno motor de 1.8 litros com quatro cilindros em linha turbo e com um supercharger para reduzir o 'lag' do turbo. Ao início produzia 420/480 cavalos...",
        date: "8 de outubro de 2025",
        category: "wrc",
        image: "assets/img/rally_lancia_delta_s4.png"
    },

    {
        id: 6,
        title: "HONDA S2000 - VTEC TURBINADO",
        description: "Equipado com motor 2.0 litros aspirado VTEC de alta rotação, o S2000 original já rendia 240 cavalos. No filme, o modelo foi preparado com turbo e sistema de nitro...",
        date: "16 de outubro de 2025",
        category: "rua",
        image: "assets/img/rua_honda_s2000.png"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('cards-grid');
    const filterInputs = document.querySelectorAll('input[name="category"]');

    function renderCards(filter = 'all') {
        gridContainer.innerHTML = ''; 

        carsData.forEach(car => {
            if (filter !== 'all' && car.category !== filter) return;

            const card = document.createElement('article');
            card.className = 'car-card';
            
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${car.image}" alt="${car.title}">
                    <span class="card-tag ${car.category}">${car.category.toUpperCase()}</span>
                </div>
                <div class="card-content">
                    <h3>${car.title}</h3>
                    <p>${car.description}</p>
                    <span class="card-date">${car.date}</span>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    }

    filterInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            renderCards(e.target.value);
        });
    });

    renderCards();
});