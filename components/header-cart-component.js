Vue.component('header-cart-component', {
    props: ['cart'],
    // data() {
    //     return { isVisibleCart: false }
    // },
    template:
        ` <div class="cart"><img src="img/cart.svg" alt="cart">
    <div class="cart-container" >
        <div class="item-in-cart"  v-for="item in cart" :key="item.index"><img src="img/cart-item-img.png" alt="item">
            <div class="item-description">
                <h3 class="cart-item-name">{{ item.title }}</h3>
                <div class="rate"><span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star-half-full"></span>
                </div>
                <h4 class="accent-txt">1 x $ {{item.price}}</h4>
            </div>

        </div>
        <div class="sub-total">
            <h3 class="sub-total">TOTAL </h3>
            <!-- <h3>$500.00</h3> -->
        </div>

        <div class="cart-btns">
            <a class="cart-btn" href="#">Checkout</a>
            <a class="cart-btn cart-btn-to-cart" href="#">Go to cart</a>
        </div>
    </div>
</div>`,
    // methods: {
    //     showCart() {
    //         this.isVisibleCart = !this.isVisibleCart;

    //     },
    // }
});
const a = Vue.component.template;
console.log(Vue.cart);