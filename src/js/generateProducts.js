import getProducts from './services/getData.js';
const generateProduct = (callback) => {
    const productSection = document.querySelector('#products_section');
    getProducts.getData().then(data => {
        data.map(item => {
           const {productId, 
                  code, 
                  title,
                  primaryImageUrl, 
                  assocProducts, 
                  unit, 
                  unitFull, 
                  unitAlt, 
                  unitRatioAlt,
                  isActive,
                  priceGoldAlt,
                  priceRetailAlt,} = item;
           const dataImg = primaryImageUrl.toLowerCase().split('');
           const img = dataImg.slice(0, -4).concat(['_220x220_1'].concat(dataImg.slice(-4))).join('');

           const tags = assocProducts.split(';').filter(item => item).map((item => {
                if(!item) return;
                const tag = `<a href="#" class="url--link">${item.trim()}</a>`;          
                return tag;
            })); 
            
            const unitUpdate = () => {
                if(unitFull === 'упаковка'){
                    return(
                     `<span class="ng-binding">Продается упаковками:</span>
                     <span class="unit--infoInn">1 ${unit} = ${unitRatioAlt} ${unitAlt} </span>
                     `
                    )
                } else if(unitFull === 'комплект'){
                    return `<span class="ng-binding">Продается в комплекте</span>`
                } else {
                    return `<span class="ng-binding">Продается поштучно</span>`
                }
            }
           const unitRes = unitUpdate();
           const product = `
                <div class="products_page pg_0" data-product-id=${productId}>
                    <div class="product product_horizontal">                                
                        <span class="product_code">Код: ${code}</span>
                        <div class="product_status_tooltip_container">
                            <span class="product_status">${isActive ? 'В наличии' : 'Нет в наличии'}</span>
                        </div>                                
                        <div class="product_photo">
                            <a href="#" class="url--link product__link">
                                <img src="${img}">
                            </a>                                    
                        </div>
                        <div class="product_description">
                            <a href="#" class="product__link">${title}</a>
                        </div>
                        <div class="product_tags hidden-sm">
                            <p>Могут понадобиться:</p>
                            ${tags.join(', ')}
                        </div>
                        <div class="product_units">
                            <div class="unit--wrapper">
                                <div class="unit--select unit--active">
                                    <p class="ng-binding">За м. кв.</p>
                                </div>
                                <div class="unit--select">
                                    <p class="ng-binding">За упаковку</p>
                                </div>
                            </div>
                        </div>
                        <p class="product_price_club_card">
                            <span class="product_price_club_card_text">По карте<br>клуба</span>
                            <span class="goldPrice">${priceGoldAlt}</span>
                            <span class="rouble__i black__i">
                                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
                                </svg>
                                </span>
                        </p>
                        <p class="product_price_default">
                            <span class="retailPrice">${priceRetailAlt}</span>
                            <span class="rouble__i black__i">
                                <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
                                </svg>
                                </span>
                        </p>
                        <div class="product_price_points">
                            <p class="ng-binding">Можно купить за ${priceGoldAlt} балла</p>
                        </div>
                        <div class="list--unit-padd"></div>
                        <div class="list--unit-desc">
                            <div class="unit--info">
                                <div class="unit--desc-i"></div>
                                <div class="unit--desc-t">
                                    <p>
                                        ${unitRes}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="product__wrapper">
                            <div class="product_count_wrapper">
                                <div class="stepper">
                                    <input class="product__count stepper-input" type="text" value="1">
                                    <span class="stepper-arrow up"></span>
                                    <span class="stepper-arrow down"></span>                                            
                                </div>
                            </div>
                            <span class="btn btn_cart" data-url="/cart/" data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
                                <svg class="ic ic_cart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                                </svg>
                                <span class="ng-binding" data-product-id=${productId}>В корзину</span>
                            </span>
                        </div>
                    </div>
                </div>
            `;
            productSection.insertAdjacentHTML('afterbegin', product);
            
            
        })
        callback(); 
    });
}

export default generateProduct;