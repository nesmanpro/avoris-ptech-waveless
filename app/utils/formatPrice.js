export const formatPrice = (priceStr) => {
    if (typeof priceStr !== 'string') return NaN;

    return parseFloat(priceStr.replace(',', '.'));

};


export function formatTax(price, taxRate = 0.16) {
    const taxedPrice = price * (1 + taxRate);
    const rounded = taxedPrice.toFixed(2);

    return rounded.replace('.', ',');
}