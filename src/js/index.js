import getProducts from './services/getData.js';
import generateProduct from './generateProducts.js';

document.addEventListener('DOMContentLoaded', () => {
    // Обработка данных при переключении формата цены
    const switchUnit = (e) => {
        const target = e.target;
        const item = target.closest('.products_page');
        const unit = target.closest('.unit--wrapper');
        const unitSelect = target.closest('.unit--select');
        const unitSelects = unit.querySelectorAll('.unit--select');
        if(unitSelect){
            unitSelects.forEach(item => item.classList.remove('unit--active'))
            unitSelect.classList.add('unit--active');
            switch (unitSelect.querySelector('.ng-binding').textContent){
                case 'За м. кв.':
                    getDataPrice(item, item.dataset.productId, 'За м. кв.');
                    break;
                case 'За упаковку':
                    getDataPrice(item, item.dataset.productId, 'За упаковку');
                    break;
            }  
        }
    }
    // Получение новых данных при переключении формата цены
    const getDataPrice = (item, id, type='За м. кв.') => {
        const priceClub = item.querySelector('.goldPrice');
        const retailPrice = item.querySelector('.retailPrice');
        getProducts.getData().then(data => {
            data.forEach(item => {
                if(item.productId === id){
                    switch (type){
                        case 'За м. кв.':
                            priceClub.textContent = item.priceGoldAlt;
                            retailPrice.textContent = item.priceRetailAlt;
                            break;
                        case 'За упаковку':
                            priceClub.textContent = item.priceGold;
                            retailPrice.textContent = item.priceRetail;
                            break;                        
                    }
                }
            })
        })
    }
    // Изменение количсетва товара
    const updateCount = (e) => {  
        const target = e.target;      
        const stepper = target.closest('.stepper');
        const countValue = stepper.querySelector('.product__count');
        const stepUp = target.closest('.up');
        const stepDown = target.closest('.down');
        if(stepUp){
            countValue.value = +countValue.value + 1;
        } else if(stepDown){
            countValue.value > 1 ? countValue.value = +countValue.value - 1 : countValue.value = 1;
        }
    }
    // Генерация карточек на странице и присвоение функций
    generateProduct(() => {
        const productItem = document.querySelectorAll('.products_page');
        productItem.forEach(item => {  
            getDataPrice(item, item.dataset.productId);          
            item.querySelector('.stepper').addEventListener('click', (e) => updateCount(e));
            item.querySelector('.unit--wrapper').addEventListener('click', (e) => switchUnit(e));
        });
    });

});
