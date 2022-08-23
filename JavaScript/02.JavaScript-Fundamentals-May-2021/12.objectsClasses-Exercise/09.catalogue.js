function solve(input) {
    let catalogue = {};
    for (const string of input) {
        let [product, price] = string.split(" : ");
        let key = product.charAt(0);
        if (!catalogue.hasOwnProperty(key)) {
            catalogue[key] = [];
        }
        catalogue[key].push({ product, price });
    }

    let keys = Object.keys(catalogue);
    keys.sort((a, b) => a.localeCompare(b));

    for (const key of keys) {
        console.log(key);
        catalogue[key].sort((a, b) => a.product.localeCompare(b.product));
        for (const product of catalogue[key]) {
            console.log(`  ${product.product}: ${product.price}`);
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])