 const getProducts = {
    async getData(){
        const res = await fetch('products.json')
        .then(data => data.json());
        return res;
    }
}

export default getProducts;