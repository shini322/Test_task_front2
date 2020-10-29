 const getProducts = {
    async getData(){
        const res = await fetch('products.json')
        .then(data => data.json())
        .catch(error => console.log(new Error(`Не удалось получить данные, ошибка: ${error}`)));
        return res;
    }
}

export default getProducts;