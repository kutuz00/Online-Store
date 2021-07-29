const app = new Vue({
    el: '#app',
    data: {
        items: [],
        filteredItems: [],
        cart: [],
        searchLine: '',
        isVisibleCart: false,
        id_product: '',
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
        }
    },
    mounted() {
        fetch('http://127.0.0.1:5500/catalog.json').then(responce => responce.json())
            .then((responce) => this.items = responce)
            .then((responce) => this.filteredItems = responce);
    }
});