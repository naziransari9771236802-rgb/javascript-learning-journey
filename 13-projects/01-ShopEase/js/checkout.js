/* =====================================================
   SHOPEASE CHECKOUT
===================================================== */


let checkoutCart =
    JSON.parse(
        localStorage.getItem("shopEaseCart")
    ) || [];


let appliedCoupon = null;


/* =====================================================
   COUPONS
===================================================== */

const coupons = {

    SAVE10: {
        type: "percentage",
        value: 10,
        minimum: 1000
    },

    SAVE20: {
        type: "percentage",
        value: 20,
        minimum: 3000
    },

    FLAT200: {
        type: "flat",
        value: 200,
        minimum: 2000
    }

};


/* =====================================================
   LOAD CHECKOUT
===================================================== */

function loadCheckout() {

    const itemsContainer =
        document.querySelector(
            "#checkoutItems"
        );


    if (!itemsContainer) {
        return;
    }


    if (checkoutCart.length === 0) {

        itemsContainer.innerHTML = `

            <div class="empty-state">

                <div>
                    🛒
                </div>

                <h2>
                    Your Cart Is Empty
                </h2>

                <p>
                    Add some products before checkout.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Continue Shopping
                </a>

            </div>

        `;

        return;
    }


    itemsContainer.innerHTML =
        checkoutCart
            .map(
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


                    const total =
                        product.price *
                        item.quantity;


                    return `

                        <div class="checkout-product">

                            <div class="checkout-product-image">

                                ${product.image}

                            </div>


                            <div class="checkout-product-info">

                                <h3>
                                    ${product.name}
                                </h3>

                                <p>
                                    ${product.category}
                                </p>

                                <span>
                                    ₹${product.price}
                                    ×
                                    ${item.quantity}
                                </span>

                            </div>


                            <strong>
                                ₹${total}
                            </strong>

                        </div>

                    `;

                }
            )
            .join("");


    calculateCheckoutTotal();

}


/* =====================================================
   CALCULATE TOTAL
===================================================== */

function calculateCheckoutTotal() {

    let subtotal = 0;


    checkoutCart.forEach(
        function (item) {

            const product =
                products.find(
                    function (p) {
                        return p.id === item.id;
                    }
                );


            if (product) {

                subtotal +=
                    product.price *
                    item.quantity;

            }

        }
    );


    const delivery =
        subtotal >= 1999
            ? 0
            : 99;


    let discount = 0;


    /* Existing automatic discount */

    if (subtotal >= 3000) {

        discount =
            Math.round(
                subtotal * 0.10
            );

    }


    /* Coupon */

    if (appliedCoupon) {

        const coupon =
            coupons[appliedCoupon];


        if (coupon) {

            if (
                coupon.type ===
                "percentage"
            ) {

                discount +=
                    Math.round(
                        subtotal *
                        coupon.value /
                        100
                    );

            }


            if (
                coupon.type ===
                "flat"
            ) {

                discount +=
                    coupon.value;

            }

        }

    }


    if (discount > subtotal) {

        discount = subtotal;

    }


    const total =
        subtotal +
        delivery -
        discount;


    const totals =
        document.querySelector(
            "#checkoutTotals"
        );


    totals.innerHTML = `

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

                ${
                    delivery === 0
                        ? "FREE"
                        : "₹" + delivery
                }

            </strong>

        </div>


        <div class="summary-row discount-row">

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

    `;


    return {

        subtotal,
        delivery,
        discount,
        total

    };

}


/* =====================================================
   APPLY COUPON
===================================================== */

function applyCoupon() {

    const input =
        document.querySelector(
            "#couponInput"
        );


    const message =
        document.querySelector(
            "#couponMessage"
        );


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (!code) {

        message.textContent =
            "Please enter a coupon code.";

        return;

    }


    const coupon =
        coupons[code];


    if (!coupon) {

        appliedCoupon = null;

        message.textContent =
            "Invalid coupon code.";

        calculateCheckoutTotal();

        return;

    }


    let subtotal = 0;


    checkoutCart.forEach(
        function (item) {

            const product =
                products.find(
                    function (p) {
                        return p.id === item.id;
                    }
                );


            if (product) {

                subtotal +=
                    product.price *
                    item.quantity;

            }

        }
    );


    if (subtotal < coupon.minimum) {

        message.textContent =
            `Minimum order value is ₹${coupon.minimum}.`;

        return;

    }


    appliedCoupon = code;


    message.textContent =
        `${code} applied successfully! 🎉`;


    calculateCheckoutTotal();

}


/* =====================================================
   PLACE ORDER
===================================================== */

function placeOrder(event) {

    event.preventDefault();


    if (checkoutCart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    const name =
        document.querySelector(
            "#fullName"
        ).value.trim();


    const phone =
        document.querySelector(
            "#phone"
        ).value.trim();


    const email =
        document.querySelector(
            "#email"
        ).value.trim();


    const address =
        document.querySelector(
            "#address"
        ).value.trim();


    const city =
        document.querySelector(
            "#city"
        ).value.trim();


    const state =
        document.querySelector(
            "#state"
        ).value.trim();


    const pincode =
        document.querySelector(
            "#pincode"
        ).value.trim();


    const paymentMethod =
        document.querySelector(
            "#paymentMethod"
        ).value;


    if (pincode.length !== 6) {

        alert(
            "Please enter a valid 6 digit pincode."
        );

        return;

    }


    const totals =
        calculateCheckoutTotal();


    const order = {

        id:
            "SE" +
            Date.now(),

        date:
            new Date().toLocaleString(),

        customer: {

            name,
            phone,
            email

        },

        address: {

            address,
            city,
            state,
            pincode

        },

        paymentMethod,

        items:
            checkoutCart.map(
                function (item) {

                    const product =
                        products.find(
                            function (p) {
                                return p.id === item.id;
                            }
                        );


                    return {

                        id: product.id,

                        name: product.name,

                        price: product.price,

                        image: product.image,

                        quantity:
                            item.quantity

                    };

                }
            ),

        subtotal:
            totals.subtotal,

        delivery:
            totals.delivery,

        discount:
            totals.discount,

        total:
            totals.total,

        coupon:
            appliedCoupon,

        status:
            "Order Placed"

    };


    let orders =
        JSON.parse(
            localStorage.getItem(
                "shopEaseOrders"
            )
        ) || [];


    orders.unshift(order);


    localStorage.setItem(
        "shopEaseOrders",
        JSON.stringify(orders)
    );


    /* Empty cart */

    localStorage.removeItem(
        "shopEaseCart"
    );


    alert(
        `Order placed successfully! 🎉\nOrder ID: ${order.id}`
    );


    window.location.href =
        "orders.html";

}


/* =====================================================
   FORM EVENT
===================================================== */

const checkoutForm =
    document.querySelector(
        "#checkoutForm"
    );


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        placeOrder
    );

}


/* =====================================================
   START
===================================================== */

loadCheckout();