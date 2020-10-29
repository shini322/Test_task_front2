(()=>{"use strict";function n(n,t,c,e,s,a,r){try{var i=n[a](r),o=i.value}catch(n){return void c(n)}i.done?t(o):Promise.resolve(o).then(e,s)}const t=function(){return(t=regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("products.json").then((function(n){return n.json()})).catch((function(n){return console.log(new Error("Не удалось получить данные, ошибка: ".concat(n)))}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})),function(){var c=this,e=arguments;return new Promise((function(s,a){var r=t.apply(c,e);function i(t){n(r,s,a,i,o,"next",t)}function o(t){n(r,s,a,i,o,"throw",t)}i(void 0)}))})();var t};document.addEventListener("DOMContentLoaded",(function(){var n,c,e=function(n,c){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"За м. кв.",s=n.querySelector(".goldPrice"),a=n.querySelector(".retailPrice");t().then((function(n){n.forEach((function(n){if(n.productId===c)switch(e){case"За м. кв.":s.textContent=n.priceGoldAlt,a.textContent=n.priceRetailAlt;break;case"За упаковку":s.textContent=n.priceGold,a.textContent=n.priceRetail}}))})).catch((function(n){return console.log(new Error("Не удалось получить данные при переключении формата цены, ошибка: ".concat(n)))}))};n=function(){document.querySelectorAll(".products_page").forEach((function(n){e(n,n.dataset.productId),n.querySelector(".stepper").addEventListener("click",(function(n){return function(n){var t=n.target,c=t.closest(".stepper").querySelector(".product__count"),e=t.closest(".up"),s=t.closest(".down");e?c.value=+c.value+1:s&&(c.value>1?c.value=+c.value-1:c.value=1)}(n)})),n.querySelector(".unit--wrapper").addEventListener("click",(function(n){return function(n){var t=n.target,c=t.closest(".products_page"),s=t.closest(".unit--wrapper"),a=t.closest(".unit--select"),r=s.querySelectorAll(".unit--select");if(a)switch(r.forEach((function(n){return n.classList.remove("unit--active")})),a.classList.add("unit--active"),a.querySelector(".ng-binding").textContent){case"За м. кв.":e(c,c.dataset.productId,"За м. кв.");break;case"За упаковку":e(c,c.dataset.productId,"За упаковку")}}(n)}))}))},c=document.querySelector("#products_section"),t().then((function(t){t.map((function(n){var t=n.productId,e=n.code,s=n.title,a=n.primaryImageUrl,r=n.assocProducts,i=n.unit,o=n.unitFull,l=n.unitAlt,u=n.unitRatioAlt,p=n.isActive,d=n.priceGoldAlt,v=n.priceRetailAlt,_=a.toLowerCase().split(""),g=_.slice(0,-4).concat(["_220x220_1"].concat(_.slice(-4))).join(""),f=r.split(";").filter((function(n){return n})).map((function(n){if(n)return'<a href="#" class="url--link">'.concat(n.trim(),"</a>")})),w="упаковка"===o?'<span class="ng-binding">Продается упаковками:</span>\n                     <span class="unit--infoInn">1 '.concat(i," = ").concat(u," ").concat(l," </span>\n                     "):"комплект"===o?'<span class="ng-binding">Продается в комплекте</span>':'<span class="ng-binding">Продается поштучно</span>',h='\n                <div class="products_page pg_0" data-product-id='.concat(t,'>\n                    <div class="product product_horizontal">                                \n                        <span class="product_code">Код: ').concat(e,'</span>\n                        <div class="product_status_tooltip_container">\n                            <span class="product_status">').concat(p?"В наличии":"Нет в наличии",'</span>\n                        </div>                                \n                        <div class="product_photo">\n                            <a href="#" class="url--link product__link">\n                                <img src="').concat(g,'">\n                            </a>                                    \n                        </div>\n                        <div class="product_description">\n                            <a href="#" class="product__link">').concat(s,'</a>\n                        </div>\n                        <div class="product_tags hidden-sm">\n                            <p>Могут понадобиться:</p>\n                            ').concat(f.join(", "),'\n                        </div>\n                        <div class="product_units">\n                            <div class="unit--wrapper">\n                                <div class="unit--select unit--active">\n                                    <p class="ng-binding">За м. кв.</p>\n                                </div>\n                                <div class="unit--select">\n                                    <p class="ng-binding">За упаковку</p>\n                                </div>\n                            </div>\n                        </div>\n                        <p class="product_price_club_card">\n                            <span class="product_price_club_card_text">По карте<br>клуба</span>\n                            <span class="goldPrice">').concat(d,'</span>\n                            <span class="rouble__i black__i">\n                                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">\n                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>\n                                </svg>\n                                </span>\n                        </p>\n                        <p class="product_price_default">\n                            <span class="retailPrice">').concat(v,'</span>\n                            <span class="rouble__i black__i">\n                                <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">\n                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>\n                                </svg>\n                                </span>\n                        </p>\n                        <div class="product_price_points">\n                            <p class="ng-binding">Можно купить за ').concat(d,' балла</p>\n                        </div>\n                        <div class="list--unit-padd"></div>\n                        <div class="list--unit-desc">\n                            <div class="unit--info">\n                                <div class="unit--desc-i"></div>\n                                <div class="unit--desc-t">\n                                    <p>\n                                        ').concat(w,'\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="product__wrapper">\n                            <div class="product_count_wrapper">\n                                <div class="stepper">\n                                    <input class="product__count stepper-input" type="text" value="1">\n                                    <span class="stepper-arrow up"></span>\n                                    <span class="stepper-arrow down"></span>                                            \n                                </div>\n                            </div>\n                            <span class="btn btn_cart" data-url="/cart/" data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">\n                                <svg class="ic ic_cart">\n                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>\n                                </svg>\n                                <span class="ng-binding" data-product-id=').concat(t,">В корзину</span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            ");c.insertAdjacentHTML("afterbegin",h)})),n()})).catch((function(n){return console.log(new Error("Ну удалось построить карточки товаров, ошибка ".concat(n)))}))}))})();