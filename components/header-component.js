Vue.component('header-component', {
    props: ['cart', 'isVisibleCart'],
    template: `<header>
    <div class="top-wrapper">
        <div class="header">
            <div class="top  container">
                <div class="top-left logo "> <a class="logo-link" href="index.html">
                        <h1 class="logo-txt"> Bran<span class="accent-txt accent-font">d</span></h1>
                    </a>
                   <search-component></search-component>
                </div>
                <aside class="top-right">


                   <header-cart-component :cart="cart"></header-cart-component>
                    <p class="button-my-account">My Account</p>

                </aside>
            </div>
        </div>

        <nav class="top-menu container">
            <div>
                <ul class="navigation">
                    <li class="menu">Home</li>
                    <li class="menu">Men <div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="menu-banner-h1">Super
                                        sale!</h2>
                                    <div class="rectangle"></div> <img class="menu-banner" src="img/menu-banner.png"
                                        alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu">Women<div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="menu-banner-h1">Super
                                        sale!</h2>
                                    <div class="rectangle"></div>
                                    <img class="menu-banner" src="img/menu-banner.png" alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu">Kids<div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="menu-banner-h1">Super
                                        sale!</h2>
                                    <div class="rectangle"></div> <img class="menu-banner" src="img/menu-banner.png"
                                        alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu reverse ">Accoseriese<div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="menu-banner-h1">Super
                                        sale!</h2>
                                    <div class="rectangle"></div> <img class="menu-banner" src="img/menu-banner.png"
                                        alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu reverse">Featured<div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h3 class="menu-banner-h1">Super
                                        sale!</h3>
                                    <div class="rectangle"></div> <img class="menu-banner" src="img/menu-banner.png"
                                        alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu reverse">Hot Deals <div class="product-categories">
                            <div class="product-categories-flex-contaiener">
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                        <li>Blazers</li>
                                        <li>Denim</li>
                                        <li>Leggings/Pants</li>
                                        <li>Skirts/Shorts</li>
                                        <li>Accessories </li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                    </ul>
                                </div>
                                <div class="flex-links">
                                    <h2 class="browse-header">Men</h2>
                                    <ul class="browse-links">
                                        <li>Dresses</li>
                                        <li>Tops</li>
                                        <li>Sweaters/Knits</li>
                                        <li>Jackets/Coats</li>
                                    </ul>
                                    <h2 class="menu-banner-h1">Super
                                        sale!</h2>
                                    <div class="rectangle"></div> <img class="menu-banner" src="img/menu-banner.png"
                                        alt="man">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</header>`
});