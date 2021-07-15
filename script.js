class Item {
    constructor(title, price, itemImg) {
        this._title = title;
        this._price = +price;
        this._itemImg = itemImg;
    }

    getPrice() {
        return this._price;
    }

    render() {
        return `<div class="product-item">
        <a class="item-link" href="#"><img class="product-img" src="${this._itemImg}" alt="item photo">
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
    constructor(title, price, itemImg, quantity = 1) {
        super(title, +price, itemImg);

        this._quantity = +quantity;
    }

    getPrice() {
        return this._price * this._quantity;
    }

    render() {
        return ` <div class="item-in-cart"><img src="${this._itemImg}" alt="item">
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
        this._items = items;
        this._$itemsListContainer = container
    }

    renderItemsList() {
        let goodsList = this._items.map(
            item => item.render()
        ).join(' ');

        this._$itemsListContainer.insertAdjacentHTML('afterbegin', goodsList);
    }
    totalPrice() {
        let sumToCheckout = this._items.map(item => item.getPrice());
        return sumToCheckout += sumToCheckout;
    }
}

const list = new ItemsList([
    new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
    new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
    new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
    new Item('Mango People T-shirt', 152.00, 'img/1.1.png'),
], document.querySelector('.products-wrap'))

const cart = new ItemsList([
    new ItemInCart('Mango People T-shirt', 152.00, 'img/cart-item-img.png'),
    new ItemInCart('Mango People T-shirt', 152.00, 'img/cart-item-img-2.png'),
    new ItemInCart('Mango People T-shirt', 152.00, 'img/cart-item-img-2.png'),
], document.querySelector('.cart-container'))

list.renderItemsList();
cart.renderItemsList();
console.log(cart.totalPrice());

