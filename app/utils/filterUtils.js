import { formatPrice } from "./formatPrice";


export const filterCardsByParams = (data, filters) => {
    const { destino, aventura, minPrice, maxPrice } = filters;

    return data
        .map(continent => {
            const filteredCards = continent.cards
                .filter(card => {
                    const precioNum = formatPrice(card.precio);

                    const matchesDestino = destino.length === 0 || destino.includes(card.destino.pais);
                    const matchesAventura = aventura.length === 0 || aventura.includes(card.aventura);
                    const matchesMinPrice = minPrice == null || precioNum >= minPrice;
                    const matchesMaxPrice = maxPrice == null || precioNum <= maxPrice;


                    return matchesDestino && matchesAventura && matchesMinPrice && matchesMaxPrice;
                });

            return {
                ...continent,
                cards: filteredCards
            };
        })
        .filter(continent => continent.cards.length > 0);
};
