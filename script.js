const goods = [
    { title: 'Mango People T-shirt', price: 152.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 252.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 152.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 52.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 352.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 252.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 52.00, productImg: 'img/1.1.png' },
    { title: 'Mango People T-shirt', price: 352.00, productImg: 'img/1.1.png' },
];


const $goodsList = document.querySelector('.products-wrap');

const renderGoodsItem = ({ title, price, productImg }) => {
    return `<div class="product-item">
    <a class="item-link" href="#"><img class="product-img" src="${productImg}" alt="item photo">
        <div class="item-desc">
            <p class="item-name">${title}</p>
            <p class="item-price">$ ${price}</p>
        </div>
    </a>
    <div class="add-to-cart">
        <a class="add" href="http://google.com"><img src="img/add-to_cart.svg" alt="add to cart">
            <p class="add-txt"> Add to cart</p>
        </a>
    </div>

</div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item)
    ).join("");

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();