// function makeGETRequest(url) {
//     var xhr;

//     return new Promise(function (resolve, reject) {

//         if (window.XMLHttpRequest) {
//             xhr = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {
//             xhr = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xhr.open('GET', url, true);

//         xhr.onload = function () {
//             if (this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 var error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         };

//         xhr.onerror = function () {
//             reject(new Error("Network Error"));
//         };

//         xhr.send();
//     });


// }

// class Item {
//     constructor(title, price, imgUrl) {
//         this._title = title;
//         this._price = +price;
//         this._imgUrl = imgUrl;
//     }

//     getPrice() {
//         return this._price;
//     }

//     render() {
//         return `<div class="product-item">
//         <a class="item-link" href="#"><img class="product-img" src="${this._imgUrl}" alt="item photo">
//             <div class="item-desc">
//                 <p class="item-name">${this._title}</p>
//                 <p class="item-price">$ ${this._price}</p>
//             </div> 
//         </a>
//         <div class="add-to-cart">
//             <a class="add" href="http://google.com"><img src="img/add-to_cart.svg" alt="add to cart">
//                 <p class="add-txt"> Add to cart</p>
//             </a>
//         </div>

//     </div>`;
//     }
// }

// class ItemInCart extends Item {
//     constructor(title, price, productImgUrl, quantity = 1) {
//         super(title, +price, productImgUrl);

//         this._quantity = +quantity;
//     }

//     getPrice() {
//         return this._price * this._quantity;
//     }

//     render() {
//         return ` <div class="item-in-cart"><img src="${this._imgUrl}" alt="item">
//         <div class="item-description">
//             <h3 class="cart-item-name">${this._title}</h3>
//             <div class="rate"><span class="far fa-star"></span>
//                 <span class="far fa-star"></span>
//                 <span class="far fa-star"></span>
//                 <span class="far fa-star"></span>
//                 <span class="far fa-star-half-full"></span>
//             </div>
//             <h4 class="accent-txt">${this._quantity} x $${this._price}</h4>
//         </div>

//     </div>`;
//     }
// }
// class ItemsList {
//     constructor(items, container) {
//         this._items = [];
//         this._$itemsListContainer = container;
//     }
//     set $itemsListContainer(container) {
//         this._$itemsListContainer = container;
//     }

//     renderItemsList(ListLocation) {
//         let listHtml = '';
//         this._items.map(item => {
//             let goodItem = new ListLocation(item.title, item.price, item.productImgUrl, item.qty);
//             listHtml += goodItem.render();
//         });
//         this._$itemsListContainer.insertAdjacentHTML('afterbegin', listHtml);

//     }
//     totalPrice() {
//         let sumToCheckout = this._items.map(item => { return item.price * item.qty });
//         let sum = 0;

//         for (let item in sumToCheckout) {
//             sum += sumToCheckout[item];
//         }
//         return document.querySelector('.sub-total').insertAdjacentHTML("beforeend", `<h3>$ ${sum.toFixed(2)}</h3>`);
//     }
//     fetchItems(url, Location, wrap) {
//         return makeGETRequest(url)
//             .then((response) => this._items = JSON.parse(response))
//             .then(() => this._$itemsListContainer = wrap)
//             .then(() => this.renderItemsList(Location))
//             .catch(error => alert(`Rejected: ${error}`));
//     }

// }

// const itemsListData = new ItemsList();
// itemsListData.fetchItems('http://localhost:5500/Api/catalog.json', Item, itemsListData._$itemsListContainer = document.querySelector('.products-wrap'));
// const cartList = new ItemsList();
// cartList.fetchItems('http://localhost:5500/Api/cart.json', ItemInCart, document.querySelector('.cart-container')).then(() => cartList.totalPrice());


// //Next Lesson

// const pattern = new RegExp(/^'|'$/gm);
// const str = "'I'm sorry if it upsets you, but I'm going to marry her.'";
// console.log(str.replace(pattern, '"'));

// const isValidEmail = /.+\@.+\..+/;
// const subscribeButton = document.querySelector(".subscribe-form-button");
// const subscribeEmail = document.querySelector(".subscribe-form-input");
// subscribeButton.addEventListener('click', (e) => {
//     const value = subscribeEmail.value;
//     if (!isValidEmail.test(value)) {

//         subscribeEmail.setAttribute("style", "border: 1px solid red");
//         alert("Wrong email format");
//     } else {

//         subscribeEmail.removeAttribute("style", "border: 1px solid red");
//         alert("Thank you for subscribing");
//     }
// });

// // Next Lesson
const app = new Vue({
    el: '#app',
    data: {
        items: [],
        filteredItems: [],
        cart: [],
        searchLine: '',
        isVisibleCart: false,
        id_product: '',
        noData: false,
        e: {},
    },
    methods: {
        filterItems() {
            const searchQuery = new RegExp(this.searchLine);
            this.filteredItems = this.items.filter((item) => searchQuery.test(item.title));
        },
        showCart() {
            this.isVisibleCart = !this.isVisibleCart;

        },
        addTocart(e) {
            this.cart.push(this.items.find((item) => item.id_product === e.target.id));
            console.log(this.cart.map(item => item));
        }

    },
    mounted() {
        fetch('http://127.0.0.1:5500/Lesson-5/catalog.json')
            .then(responce => responce.json())
            .then((responce) => this.items = responce)
            .then((responce) => this.filteredItems = responce)
            .catch(error => this.noData = !this.noData);

    },
});