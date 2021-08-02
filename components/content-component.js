Vue.component('content-component', {
    props: ['items'],
    template: ` <section>
    <header class="banner-conteiner">
        <div class="banner-content  container">
            <div class="banner-left">
                <div class="line"></div>
                <div class="banner-text">
                    <h2 class="slogan-h1">THE BRAND</h2>
                    <h2 class="slogan-h2">OF LUXERIOUS <span class="accent-txt">FASHION</span></h2>
                </div>
            </div>
            <div class="banner-right"></div>
        </div>
    </header>
    <article class="content">

        <div class="deals container">
            <div class="deals-left">
                <a class="deals-link" href="#">
                    <figure class="deals-men">
                        <img src="img/deals-men.png" alt="man">
                        <figcaption class="deals-badge">
                            <h2 class="deals-txt">Hot deal</h2>
                            <h2 class="deals-txt deals-span accent-txt">for men</h2>
                        </figcaption>
                    </figure>
                </a>
                <a class="deals-link" href="#">
                    <figure class="deals-accr">
                        <img src="img/deals-accr.png" alt="accesory">
                        <figcaption class="deals-badge">
                            <h2 class="deals-txt">LUXIROUS & trendy</h2>
                            <h2 class="deals-txt deals-span accent-txt">ACCESORIES</h2>
                        </figcaption>
                    </figure>
                </a>
            </div>
            <div class="deals-right">
                <a class="deals-link" href="#">
                    <figure class="deals-women">
                        <img src="img/deals-women.png" alt="woman">
                        <figcaption class="deals-badge">
                            <h2 class="deals-txt">30% offer</h2>
                            <h2 class="deals-txt deals-span accent-txt">women</h2>
                        </figcaption>
                    </figure>
                </a>
                <a class="deals-link" href="#">
                    <figure class="deals-kids">
                        <img src="img/deals-kids.png" alt="boy">
                        <figcaption class="deals-badge">
                            <h2 class="deals-txt">new arrivals</h2>
                            <h2 class="deals-txt deals-span accent-txt">FOR kids</h2>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </div>
    </article>
    <article class="featured container">
        <header>
            <h2>Fetured Items</h2>
            <p class="featured-txt">Shop for items based on what we featured in this week</p>
        </header>
        <items-component :items="items" v-on:updateCart="addTocart" ></items-component>
       

        <p class="more-products">Browse All Product</p>
        <footer class="offer-ad">
            <div class="ad">
                <h2 class="accent-font">30% <span class="accent-txt">OFFER</span></h2>
                <h2> FOR WOMEN</h2>
            </div>
            <div class="about-offer">
                <div class="offer-deteil">
                    <h2><img src="img/truck.svg" alt="truck">Delivery</h2>
                    <p> Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                        extensive
                        models.</p>
                    <h2><img src="img/discount.svg" alt="discount">Sales & discounts</h2>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                        extensive
                        models.</p>
                    <h2><img src="img/crown.svg" alt="crown">Quality assurance</h2>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with
                        extensive
                        models.</p>
                </div>
            </div>
        </footer>
    </article>
 </section>`,
    data() {
        return { e: {} }
    },

    methods: {
        addTocart(e) {
            this.$emit('update-cart', e);
            console.log(e);

        }
    }

});
console.log(Vue.props);