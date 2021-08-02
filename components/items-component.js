Vue.component('items-component', {
    props: ['items'],
    template: `<div class="products-wrap">
    <item-component v-for="item in items" :item="item" :key="item.index" @updateCart="addTocart" ></item-component>
</div>`,
    data() {
        return { e: {} }
    },

    methods: {
        addTocart(e) {
            this.$emit('updateCart', e);
            console.log(e);
        }
    }
});
console.log(Vue.props);

