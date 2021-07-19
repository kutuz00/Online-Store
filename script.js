function makeGETRequest(url) {
    return fetch(url).then(json => {
        return console.log(json.json());
    });
    // .then(res => res.json())
    // .then((items) => console.log(items));


    // var xhr;

    // if (window.XMLHttpRequest) {
    //     xhr = new XMLHttpRequest();
    // } else if (window.ActiveXObject) {
    //     xhr = new ActiveXObject("Microsoft.XMLHTTP");
    // }

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //         callback(xhr.responseText);
    //     }
    // }


    // const promise = new Promise((resolve, reject) => {
    //     xhr.open('GET', url, true);
    //     xhr.send();
    //     callback();
    // });
}
class Item {
    constructor(title, price, imgUrl) {
        this._title = title;
        this._price = +price;
        this._imgUrl = imgUrl;
    }

    getPrice() {
        return this._price;
    }

    render() {
        return `<div class="product-item">
        <a class="item-link" href="#"><img class="product-img" src="${this._imgUrl}" alt="item photo">
            <div class="item-desc">
                <p class="item-name">${this._title}</p>
                <p class="item-price">$ ${this._price}</p>
            </div> 
        </a>
        <div class="add-to-cart">
            <a class="add" href="http://google.com"><img src="img/add-to_cart.svg" alt="add to cart">
                <p class="add-txt"> Add to cart</p>
            </a>
        </div>
    
    </div>`;
    }
}

class ItemInCart extends Item {
    constructor(title, price, productImgUrl, quantity = 1) {
        super(title, +price, productImgUrl);

        this._quantity = +quantity;
    }

    getPrice() {
        return this._price * this._quantity;
    }

    render() {
        return ` <div class="item-in-cart"><img src="${this._imgUrl}" alt="item">
        <div class="item-description">
            <h3 class="cart-item-name">${this._title}</h3>
            <div class="rate"><span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star"></span>
                <span class="far fa-star-half-full"></span>
            </div>
            <h4 class="accent-txt">${this._quantity} x $${this._price}</h4>
        </div>

    </div>`;
    }
}
class ItemsList {
    constructor(items, container) {
        this._items = [];
        this._$itemsListContainer = container;
    }
    set $itemsListContainer(container) {
        this._$itemsListContainer = container;
    }

    renderItemsList(ListLocation) {
        let listHtml = '';
        this._items.map(item => {
            let goodItem = new ListLocation(item.title, item.price, item.productImgUrl, item.qty);
            listHtml += goodItem.render();
        });
        this._$itemsListContainer.insertAdjacentHTML('afterbegin', listHtml);



        // let itemsList = this. _items.map(
        //     item => item.render(new Item(item.title, item.price))
        // ).join(' ');

        // this._$itemsListContainer.insertAdjacentHTML('afterbegin', itemsList);
    }
    totalPrice() {
        console.log(this._items);
        let sumToCheckout = this._items.map(item => { return item.price * item.qty });
        console.log(sumToCheckout);
        let sum = 0;

        for (let item in sumToCheckout) {
            sum += sumToCheckout[item];
        }
        return `<h3>$ ${sum.toFixed(2)}</h3>`;
    }
    fetchItems(callback, url) {
        let data = makeGETRequest(url)
            .then(() => {
                console.log('I am 1');
                // this._items = JSON.parse(items);
                callback();
            });
        data.then(() => console.log(data))

    }

}

// const list = new ItemsList([
//     new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
//     new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
//     new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
//     new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
// ], document.querySelector('.products-wrap'));

const itemsListData = new ItemsList();

itemsListData.fetchItems(() => {
    itemsListData.$itemsListContainer = document.querySelector('.products-wrap');
    itemsListData.renderItemsList(Item);
}, 'http://localhost:5500/Api/catalog.json');
const cartList = new ItemsList();
cartList.fetchItems(() => {
    cartList.$itemsListContainer = document.querySelector('.cart-container');
    cartList.renderItemsList(ItemInCart);
    console.log(cartList.totalPrice());
    document.querySelector('.sub-total').insertAdjacentHTML("beforeend", cartList.totalPrice());
}, 'http://localhost:5500/Api/cart.json');








// const cart = new ItemsList([
//     new ItemInCart('Mango People T-shirt', 149.99, 'img/cart-item-img.png', 1),
//     new ItemInCart('Mango People T-shirt', 99.99, 'img/cart-item-img-2.png', 2),
// ], document.querySelector('.cart-container'));

// list.renderItemsList();
// cart.renderItemsList();



