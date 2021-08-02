Vue.component('item-component', {
    props: ['item'],
    template: `<div class="product-item">
    <a class="item-link" href="#"><img class="product-img" :src="item.productImgUrl" alt="item photo">
        <div class="item-desc">
            <p class="item-name">{{item.title}}</p>
            <p class="item-price">{{item.price}}</p>
        </div>
    </a>
    <div class="add-to-cart">
        <a class="add" href="#"><img src="img/add-to_cart.svg" alt="add to cart">
            <p :id="item.id_product" class="add-txt" @click="addToCart"> Add to cart</p>
        </a>
    </div>

</div>`,
    methods: {
        addToCart(e) {
            this.$emit('updateCart', e);
            console.log(e);
        },
    }
});
