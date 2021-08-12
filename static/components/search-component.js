Vue.component('search-component', {
    template: ` <div class="form-wrap">
    <form class="search" action="#">
        <details>
            <summary class="browse">Browse</summary>
            <div class="browse-show">
                <h2 class="browse-header">WOMEN</h2>
                <ul class="browse-links">
                    <li>Dresses</li>
                    <li> Tops</li>
                    <li> Sweaters/Knits</li>
                    <li> Jackets/Coats</li>
                    <li> Blazers</li>
                    <li> Denim</li>
                    <li> Leggings/Pants</li>
                    <li> Skirts/Shorts</li>
                    <li> Accessories </li>
                    <li> Bags/Purses</li>
                    <li> Swimwear/Underwear</li>
                    <li> Nightwear</li>
                    <li> Shoes</li>
                    <li> Beauty</li>
                </ul>
                <h2 class="browse-header">Men</h2>
                <ul class="browse-links">
                    <li>Tees/Tank tops </li>
                    <li>Shirts/Polos </li>
                    <li>Sweaters </li>
                    <li>Sweatshirts/Hoodies</li>
                    <li>Blazers </li>
                    <li>Jackets/vests </li>
                </ul>
            </div>
        </details> <input class="input" placeholder="Search for Item..." /><button
            class="submit" type="submit"><span class="fa fa-search"></span></button>
    </form>
</div>`
});