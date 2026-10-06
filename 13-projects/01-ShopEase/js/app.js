/* =====================================================
   SHOPEASE - MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   LOCAL STORAGE
===================================================== */

let cart = JSON.parse(
    localStorage.getItem("shopease-cart")
) || [];


let wishlist = JSON.parse(
    localStorage.getItem("shopease-wishlist")
) || [];


/* =====================================================
   SAVE DATA
===================================================== */

function saveCart() {

    localStorage.setItem(
        "shopease-cart",
        JSON.stringify(cart)
    );

}


function saveWishlist() {

    localStorage.setItem(
        "shopease-wishlist",
        JSON.stringify(wishlist)
    );

}


/* =====================================================
   NAVBAR COUNTERS
===================================================== */

function updateCounters() {

    const cartCount =
        document.querySelector("#cartCount");

    const wishlistCount =
        document.querySelector("#wishlistCount");


    if (cartCount) {

        const totalItems = cart.reduce(
            function (total, item) {

                return total + item.quantity;

            },
            0
        );

        cartCount.textContent = totalItems;

    }


    if (wishlistCount) {

        wishlistCount.textContent =
            wishlist.length;

    }

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);


    return `

        <article class="product-card">

            <button
                class="wishlist-btn ${isWishlisted ? "liked" : ""}"
                onclick="toggleWishlist(${product.id})"
                title="Wishlist"
            >
                ${isWishlisted ? "♥" : "♡"}
            </button>


            ${
                product.isNew
                ?
                `<span class="new-badge">NEW</span>`
                :
                ""
            }


            <a
                href="product.html?id=${product.id}"
                class="product-image"
            >
                ${product.image}
            </a>


            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>


                <a
                    href="product.html?id=${product.id}"
                    class="product-name"
                >
                    ${product.name}
                </a>


                <div class="rating">

                    <span>
                        ⭐ ${product.rating}
                    </span>

                </div>


                <div class="price-row">

                    <strong>
                        ₹${product.price}
                    </strong>

                    <del>
                        ₹${product.oldPrice}
                    </del>

                </div>


                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(
    productList,
    container
) {

    if (!container) {
        return;
    }


    if (productList.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>
                    🔎
                </div>

                <h3>
                    No Products Found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;
    }


    container.innerHTML =
        productList
            .map(createProductCard)
            .join("");

}


/* =====================================================
   HOME PAGE
===================================================== */

function loadHomePage() {

    const categoryContainer =
        document.querySelector("#categoryContainer");


    if (categoryContainer) {

        categoryContainer.innerHTML =
            categories.map(function (category) {

                return `

                    <a
                        href="products.html?category=${category.name}"
                        class="category-card"
                    >

                        <div class="category-icon">
                            ${category.icon}
                        </div>

                        <div>

                            <h3>
                                ${category.name}
                            </h3>

                            <p>
                                ${category.description}
                            </p>

                        </div>

                        <span>
                            →
                        </span>

                    </a>

                `;

            }).join("");

    }


    const trendingContainer =
        document.querySelector("#trendingProducts");


    if (trendingContainer) {

        const trending =
            products
                .slice()
                .sort(
                    function (a, b) {
                        return b.rating - a.rating;
                    }
                )
                .slice(0, 4);


        displayProducts(
            trending,
            trendingContainer
        );

    }


    const newProductsContainer =
        document.querySelector("#newProducts");


    if (newProductsContainer) {

        const newProducts =
            products.filter(
                function (product) {
                    return product.isNew;
                }
            );


        displayProducts(
            newProducts,
            newProductsContainer
        );

    }


    const reviewContainer =
        document.querySelector("#reviewContainer");


    if (reviewContainer) {

        reviewContainer.innerHTML =
            reviews.map(function (review) {

                return `

                    <article class="review-card">

                        <div class="review-stars">
                            ${"⭐".repeat(review.rating)}
                        </div>

                        <p>
                            "${review.text}"
                        </p>

                        <div class="review-user">

                            <div class="avatar">
                                ${review.name.charAt(0)}
                            </div>

                            <div>

                                <strong>
                                    ${review.name}
                                </strong>

                                <small>
                                    ${review.city}
                                </small>

                            </div>

                        </div>

                    </article>

                `;

            }).join("");

    }


    startDealTimer();

}


/* =====================================================
   HOME SEARCH
===================================================== */

function setupHomeSearch() {

    const input =
        document.querySelector("#homeSearch");

    const button =
        document.querySelector("#homeSearchBtn");


    if (!input || !button) {
        return;
    }


    function search() {

        const value =
            input.value.trim();


        if (!value) {

            window.location.href =
                "products.html";

            return;

        }


        window.location.href =
            `products.html?search=${encodeURIComponent(value)}`;

    }


    button.addEventListener(
        "click",
        search
    );


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                search();

            }

        }
    );

}


/* =====================================================
   PRODUCTS PAGE
===================================================== */

function setupProductsPage() {

    const container =
        document.querySelector("#allProducts");


    if (!container) {
        return;
    }


    const searchInput =
        document.querySelector("#productSearch");

    const categoryFilter =
        document.querySelector("#categoryFilter");

    const sortFilter =
        document.querySelector("#sortFilter");

    const resultCount =
        document.querySelector("#resultCount");


    const params =
        new URLSearchParams(
            window.location.search
        );


    const urlSearch =
        params.get("search") || "";


    const urlCategory =
        params.get("category") || "all";


    if (searchInput) {

        searchInput.value =
            urlSearch;

    }


    if (
        categoryFilter &&
        categories.some(
            function (category) {
                return category.name === urlCategory;
            }
        )
    ) {

        categoryFilter.value =
            urlCategory;

    }


    function applyFilters() {

        const searchValue =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        const categoryValue =
            categoryFilter
                ? categoryFilter.value
                : "all";


        const sortValue =
            sortFilter
                ? sortFilter.value
                : "default";


        let result =
            products.filter(
                function (product) {

                    const matchesSearch =
                        product.name
                            .toLowerCase()
                            .includes(searchValue)

                        ||

                        product.category
                            .toLowerCase()
                            .includes(searchValue);


                    const matchesCategory =
                        categoryValue === "all"
                        ||
                        product.category ===
                        categoryValue;


                    return (
                        matchesSearch &&
                        matchesCategory
                    );

                }
            );


        if (sortValue === "low") {

            result.sort(
                function (a, b) {
                    return a.price - b.price;
                }
            );

        }


        if (sortValue === "high") {

            result.sort(
                function (a, b) {
                    return b.price - a.price;
                }
            );

        }


        if (sortValue === "rating") {

            result.sort(
                function (a, b) {
                    return b.rating - a.rating;
                }
            );

        }


        if (sortValue === "new") {

            result.sort(
                function (a, b) {
                    return Number(b.isNew) -
                           Number(a.isNew);
                }
            );

        }


        displayProducts(
            result,
            container
        );


        if (resultCount) {

            resultCount.textContent =
                `${result.length} products found`;

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            applyFilters
        );

    }


    if (categoryFilter) {

        categoryFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (sortFilter) {

        sortFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    applyFilters();

}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function loadProductDetails() {

    const container =
        document.querySelector("#productDetails");


    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        Number(params.get("id"));


    const product =
        products.find(
            function (item) {
                return item.id === id;
            }
        );


    if (!product) {

        container.innerHTML = `

            <div class="empty-state">

                <h2>
                    Product Not Found
                </h2>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Back to Products
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML = `

        <div class="details-image">

            ${product.image}

        </div>


        <div class="details-content">

            <p class="eyebrow">
                ${product.category}
            </p>


            <h1>
                ${product.name}
            </h1>


            <div class="details-rating">
                ⭐ ${product.rating}
                <span>
                    • 120+ Reviews
                </span>
            </div>


            <div class="details-price">

                <strong>
                    ₹${product.price}
                </strong>

                <del>
                    ₹${product.oldPrice}
                </del>

            </div>


            <p class="details-description">
                ${product.description}
            </p>


            <div class="quantity-box">

                <button
                    id="minusBtn"
                >
                    −
                </button>

                <span id="quantity">
                    1
                </span>

                <button
                    id="plusBtn"
                >
                    +
                </button>

            </div>


            <div class="details-actions">

                <button
                    class="btn btn-primary"
                    id="detailsCartBtn"
                >
                    Add to Cart 🛒
                </button>

                <button
                    class="details-wishlist"
                    id="detailsWishlistBtn"
                >
                    ♡ Wishlist
                </button>

            </div>


            <div class="product-features">

                <div>
                    🚚
                    <span>
                        Free Delivery
                    </span>
                </div>

                <div>
                    ↩️
                    <span>
                        Easy Returns
                    </span>
                </div>

                <div>
                    🔒
                    <span>
                        Secure Shopping
                    </span>
                </div>

            </div>

        </div>

    `;


    let quantity = 1;


    const quantityDisplay =
        document.querySelector("#quantity");

    const minusBtn =
        document.querySelector("#minusBtn");

    const plusBtn =
        document.querySelector("#plusBtn");


    plusBtn.addEventListener(
        "click",
        function () {

            quantity++;

            quantityDisplay.textContent =
                quantity;

        }
    );


    minusBtn.addEventListener(
        "click",
        function () {

            if (quantity > 1) {

                quantity--;

                quantityDisplay.textContent =
                    quantity;

            }

        }
    );


    document
        .querySelector("#detailsCartBtn")
        .addEventListener(
            "click",
            function () {

                addToCart(
                    product.id,
                    quantity
                );

            }
        );


    const wishlistBtn =
        document.querySelector(
            "#detailsWishlistBtn"
        );


    updateDetailsWishlistButton(
        wishlistBtn,
        product.id
    );


    wishlistBtn.addEventListener(
        "click",
        function () {

            toggleWishlist(product.id);

            updateDetailsWishlistButton(
                wishlistBtn,
                product.id
            );

        }
    );


    loadRelatedProducts(
        product
    );

}


/* =====================================================
   RELATED PRODUCTS
===================================================== */

function loadRelatedProducts(
    currentProduct
) {

    const container =
        document.querySelector("#relatedProducts");


    if (!container) {
        return;
    }


    const related =
        products
            .filter(
                function (product) {

                    return (
                        product.category ===
                        currentProduct.category
                        &&
                        product.id !==
                        currentProduct.id
                    );

                }
            )
            .slice(0, 4);


    displayProducts(
        related,
        container
    );

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(
    productId,
    quantity = 1
) {

    const product =
        products.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (!product) {
        return;
    }


    const existingItem =
        cart.find(
            function (item) {
                return item.id === productId;
            }
        );


    if (existingItem) {

        existingItem.quantity +=
            quantity;

    }

    else {

        cart.push({

            id: product.id,

            quantity: quantity

        });

    }


    saveCart();

    updateCounters();


    alert(
        `${product.name} added to cart!`
    );

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            function (item) {

                return item.id !==
                    productId;

            }
        );


    saveCart();

    updateCounters();

    loadCartPage();

}


/* =====================================================
   CHANGE CART QUANTITY
===================================================== */

function changeCartQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            function (cartItem) {

                return cartItem.id ===
                    productId;

            }
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();

    updateCounters();

    loadCartPage();

}


/* =====================================================
   CART PAGE
===================================================== */

function loadCartPage() {

    const container =
        document.querySelector("#cartItems");


    const summary =
        document.querySelector("#cartSummary");


    if (!container || !summary) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>
                    🛒
                </div>

                <h2>
                    Your Cart Is Empty
                </h2>

                <p>
                    Looks like you haven't added
                    anything yet.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Start Shopping
                </a>

            </div>

        `;


        summary.innerHTML = "";

        return;

    }


    let subtotal = 0;


    container.innerHTML =
        cart.map(
            function (item) {

                const product =
                    products.find(
                        function (p) {
                            return p.id === item.id;
                        }
                    );


                if (!product) {
                    return "";
                }


                const itemTotal =
                    product.price *
                    item.quantity;


                subtotal += itemTotal;


                return `

                    <article class="cart-item">

                        <a
                            href="product.html?id=${product.id}"
                            class="cart-image"
                        >
                            ${product.image}
                        </a>


                        <div class="cart-info">

                            <p class="product-category">
                                ${product.category}
                            </p>

                            <h3>
                                ${product.name}
                            </h3>

                            <strong>
                                ₹${product.price}
                            </strong>


                            <div class="cart-quantity">

                                <button
                                    onclick="changeCartQuantity(
                                        ${product.id},
                                        -1
                                    )"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    onclick="changeCartQuantity(
                                        ${product.id},
                                        1
                                    )"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        <div class="cart-right">

                            <strong>
                                ₹${itemTotal}
                            </strong>

                            <button
                                class="remove-btn"
                                onclick="removeFromCart(
                                    ${product.id}
                                )"
                            >
                                Remove
                            </button>

                        </div>

                    </article>

                `;

            }
        ).join("");


    const delivery =
        subtotal >= 1999
        ? 0
        : 99;


    const discount =
        subtotal >= 3000
        ? Math.round(subtotal * 0.10)
        : 0;


    const total =
        subtotal +
        delivery -
        discount;


    summary.innerHTML = `

        <h2>
            Order Summary
        </h2>


        <div class="summary-row">

            <span>
                Subtotal
            </span>

            <strong>
                ₹${subtotal}
            </strong>

        </div>


        <div class="summary-row">

            <span>
                Delivery
            </span>

            <strong>
                ${delivery === 0
                    ? "FREE"
                    : "₹" + delivery}
            </strong>

        </div>


        <div class="summary-row">

            <span>
                Discount
            </span>

            <strong>
                - ₹${discount}
            </strong>

        </div>


        <div class="summary-total">

            <span>
                Total
            </span>

            <strong>
                ₹${total}
            </strong>

        </div>


        <button
            class="btn btn-primary checkout-btn"
            onclick="checkout()"
        >
            Proceed to Checkout →
        </button>


        <p class="secure-text">
            🔒 Secure checkout
        </p>

    `;

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    window.location.href =
        "checkout.html";

}

/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(productId);


    if (index === -1) {

        wishlist.push(productId);

        alert(
            "Added to wishlist ❤️"
        );

    }

    else {

        wishlist.splice(
            index,
            1
        );

    }


    saveWishlist();

    updateCounters();

    loadWishlistPage();

}


/* =====================================================
   DETAILS WISHLIST BUTTON
===================================================== */

function updateDetailsWishlistButton(
    button,
    productId
) {

    if (!button) {
        return;
    }


    const exists =
        wishlist.includes(productId);


    button.textContent =
        exists
        ? "♥ In Wishlist"
        : "♡ Add to Wishlist";

}


/* =====================================================
   WISHLIST PAGE
===================================================== */

function loadWishlistPage() {

    const container =
        document.querySelector(
            "#wishlistProducts"
        );


    if (!container) {
        return;
    }


    const wishlistProducts =
        products.filter(
            function (product) {

                return wishlist.includes(
                    product.id
                );

            }
        );


    if (wishlistProducts.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>
                    ♡
                </div>

                <h2>
                    Your Wishlist Is Empty
                </h2>

                <p>
                    Save products you love here.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Explore Products
                </a>

            </div>

        `;

        return;

    }


    displayProducts(
        wishlistProducts,
        container
    );

}


/* =====================================================
   NEWSLETTER
===================================================== */

function setupNewsletter() {

    const form =
        document.querySelector(
            "#newsletterForm"
        );


    if (!form) {
        return;
    }


    const emailInput =
        document.querySelector(
            "#newsletterEmail"
        );


    const message =
        document.querySelector(
            "#newsletterMessage"
        );


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                emailInput.value.trim();


            if (!email) {

                message.textContent =
                    "Please enter your email.";

                return;

            }


            if (!email.includes("@")) {

                message.textContent =
                    "Please enter a valid email.";

                return;

            }


            message.textContent =
                "✓ Successfully subscribed!";


            emailInput.value = "";

        }
    );

}


/* =====================================================
   DEAL TIMER
===================================================== */

function startDealTimer() {

    const days =
        document.querySelector("#days");

    const hours =
        document.querySelector("#hours");

    const minutes =
        document.querySelector("#minutes");

    const seconds =
        document.querySelector("#seconds");


    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {
        return;
    }


    const endTime =
        Date.now() +
        (
            2 *
            24 *
            60 *
            60 *
            1000
        );


    function updateTimer() {

        const difference =
            endTime - Date.now();


        if (difference <= 0) {

            days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            return;

        }


        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const d =
            Math.floor(
                totalSeconds /
                (24 * 60 * 60)
            );


        const h =
            Math.floor(
                (
                    totalSeconds %
                    (24 * 60 * 60)
                ) / 3600
            );


        const m =
            Math.floor(
                (
                    totalSeconds %
                    3600
                ) / 60
            );


        const s =
            totalSeconds % 60;


        days.textContent =
            String(d).padStart(2, "0");

        hours.textContent =
            String(h).padStart(2, "0");

        minutes.textContent =
            String(m).padStart(2, "0");

        seconds.textContent =
            String(s).padStart(2, "0");

    }


    updateTimer();

    setInterval(
        updateTimer,
        1000
    );

}


/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const button =
        document.querySelector("#menuBtn");

    const nav =
        document.querySelector(".nav-links");


    if (!button || !nav) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "show"
            );

        }
    );

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCounters();

        loadHomePage();

        setupHomeSearch();

        setupProductsPage();

        loadProductDetails();

        loadCartPage();

        loadWishlistPage();

        setupNewsletter();

        setupMobileMenu();

    }
);