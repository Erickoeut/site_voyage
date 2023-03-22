// const voyages = [
//     {
//         id: 1,
//         name: 'France',
//         destination: [
//             {
//                 cityId: "1",
//                 cityName: 'Paris',
//                 countryId:'1',
//                 countryName:'France',
//                 desc: "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré. ",
//                 image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_',
//                 price: 200,
//                 top: false
//             },
//             {
//                 cityId: "2",
//                 cityName: 'Lyon',
//                 countryId:'1',
//                 countryName:'France',
//                 desc: "Lyon, ville française de la région historique Rhône-Alpes, se trouve à la jonction du Rhône et de la Saône. Son centre témoigne de 2 000 ans d'histoire, avec son amphithéâtre romain des Trois Gaules, l'architecture médiévale et Renaissance du Vieux Lyon et la modernité du quartier de la Confluence sur la Presqu'île. Les Traboules, passages couverts entre les immeubles, relient le Vieux Lyon à la colline de La Croix-Rousse. ",
//                 image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQ94OEZPuwT3AEOGRN6ILlk0cpboutA_wKHmkbOBTUXffMWKghUGnKPEANvCUvUfNT_',
//                 price: 150,
//                 top: true
//             },
//             {
//                 cityId: "3",
//                 cityName: 'Marseille',
//                 countryId:'1',
//                 countryName:'France',
//                 desc: "Marseille, ville portuaire du sud de la France, est un carrefour du commerce et de l'immigration depuis sa fondation par les Grecs vers 600 av. J.-C. En son cœur se trouve le Vieux-Port où les pêcheurs vendent leurs prises sur le quai bordé de bateaux. La basilique Notre-Dame-de-la-Garde est une église romane d'inspiration byzantine. Les constructions modernes incluent notamment la Cité Radieuse, unité d'habitations conçue par Le Corbusier et la Tour CMA CGM de Zaha Hadid",
//                 image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ6-OUl5YRCuUrG7j-RnhO-gJjJgOX29YoJXz0oCTxTDepRQkRBlbdLDCQ-H602pzUU',
//                 price: 180,
//                 top: false
//             },
//         ]
//     },
//     {
//         id: 2,
//         name: 'Italie',
//         destination: [
//             {
//                 cityId: "4",
//                 cityName: 'Rome',
//                 countryId:'2',
//                 countryName:'Italie',
//                 desc: "Capitale de l'Italie, Rome est une grande ville cosmopolite dont l'art, l'architecture et la culture de presque 3 000 ans rayonnent dans le monde entier. Ses ruines telles que celles du Forum Romain et du Colisée évoquent la puissance de l'ancien Empire romain. Siège de l'Église catholique romaine, la Cité du Vatican compte la basilique Saint-Pierre et les musées du Vatican où se trouvent des chefs-d'œuvre tels que la fresque de la chapelle Sixtine, peinte par Michel-Ange. ",
//                 image: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQzUCow983AVBVT9H062wMUEiXfJVZNrcOYKsm8aMJoGu3u4BBfio70QdznkTrwrV33',
//                 price: 170,
//                 top: true
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: 'Espagne',
//         destination: [
//             {
//                 cityId: "5",
//                 cityName: 'Madrid',
//                 countryId:'3',
//                 countryName:'Espagne',
//                 desc: "Située au centre de l'Espagne, Madrid, sa capitale, est une ville dotée d'élégants boulevards et de vastes parcs très bien entretenus comme le Retiro. Elle est réputée pour ses riches collections d'œuvres d'art européennes, avec notamment celles du musée du Prado, réalisées par Goya, Velázquez et d'autres maîtres espagnols. Au cœur de la vieille Madrid des Habsbourgs se trouve la Plaza Mayor, bordée de portiques, et, à proximité, le Palais royal baroque et son Armurerie, qui comporte des armes historiques.",
//                 image: 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg',
//                 price: 120,
//                 top: false
//             },
//             {
//                 cityId: "6",
//                 cityName: 'Barcelone',
//                 countryId:'3',
//                 countryName:'Espagne',
//                 desc: "Barcelone, la capitale cosmopolite de la région espagnole de Catalogne, est réputée pour son art et son architecture. La basilique de la Sagrada Família et d'autres bâtiments emblématiques conçus par Antoni Gaudí sont de parfaits exemples du modernisme catalan. Le musée Picasso et la fondation Joan Miró présentent des œuvres d'art réalisées par les artistes qui leur ont donné leur nom. Le MUHBA, musée d'histoire de Barcelone, présente plusieurs vestiges de l'ancienne ville romaine. ",
//                 image: 'https://media.routard.com/image/81/9/barcelone-parc-guell.1475819.w740.jpg',
//                 price: 80,
//                 top: true
//             }
//         ]
//     },
//     {
//         id: 4,
//         name: 'Belgique',
//         destination: [
//             {
//                 cityId: "7",
//                 cityName: 'Bruxelles',
//                 countryId:'4',
//                 countryName:'Belgique',
//                 desc: "Bruxelles ou la ville de Bruxelles est une commune de Belgique de 183 287 habitants, capitale de la Belgique, siège de la Communauté française et de la Communauté flamande, ainsi que siège de plusieurs institutions de l'Union européenne. La commune porte le titre honorifique de ville.",
//                 image: 'https://www.bruxelles.be/sites/default/files/banner1.jpg',
//                 price: 20,
//                 top: false
//             }
//         ]
//     }
// ]

// export const fetchVoyages = () => {
//     return [...voyages]
// }

// export const fetchDestinationPays = (id) => {
//     return voyages.find(v => v.id == id)
// }

// let topVoyage = []
// for (let country of voyages) {
//     for (let destination of country.destination) {
//         if (destination.top === true) {
//             topVoyage.push(destination)
//         }
//     }
// }

// export const fetchTopVoyage = () => {
//     return topVoyage
// }

// export const cityDetails = (id) => {
//     for (let country of voyages) {
//         for (let destination of country.destination) {
//             if (destination.cityId === id) {
//                 return destination
//             }
//         }
//     }
// }