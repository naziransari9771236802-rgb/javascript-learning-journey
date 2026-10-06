/* =====================================================
   SHOPEASE ORDER HISTORY
===================================================== */


function loadOrders() {

    const container =
        document.querySelector(
            "#ordersContainer"
        );


    if (!container) {
        return;
    }


    const orders =
        JSON.parse(
            localStorage.getItem(
                "shopEaseOrders"
            )
        ) || [];


    if (orders.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div>
                    📦
                </div>

                <h2>
                    No Orders Yet
                </h2>

                <p>
                    Your completed orders will appear here.
                </p>

                <a
                    href="products.html"
                    class="btn btn-primary"
                >
                    Start Shopping
                </a>

            </div>

        `;

        return;

    }


    container.innerHTML =
        orders
            .map(
                function (order) {

                    return `

                        <article class="order-card">


                            <div class="order-header">

                                <div>

                                    <p class="eyebrow">
                                        ORDER
                                    </p>

                                    <h2>
                                        ${order.id}
                                    </h2>

                                </div>


                                <span class="order-status">
                                    ${order.status}
                                </span>

                            </div>



                            <div class="order-date">

                                📅
                                ${order.date}

                            </div>



                            <div class="order-products">

                                ${order.items
                                    .map(
                                        function (item) {

                                            return `

                                                <div class="order-product">

                                                    <div class="order-product-image">

                                                        ${item.image}

                                                    </div>


                                                    <div>

                                                        <h3>
                                                            ${item.name}
                                                        </h3>

                                                        <p>
                                                            ₹${item.price}
                                                            ×
                                                            ${item.quantity}
                                                        </p>

                                                    </div>

                                                </div>

                                            `;

                                        }
                                    )
                                    .join("")}

                            </div>



                            <div class="order-footer">

                                <div>

                                    <span>
                                        Payment
                                    </span>

                                    <strong>
                                        ${order.paymentMethod}
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        Total
                                    </span>

                                    <strong>
                                        ₹${order.total}
                                    </strong>

                                </div>

                            </div>


                            <div class="order-address">

                                <strong>
                                    Delivery Address
                                </strong>

                                <p>

                                    ${order.address.address},
                                    ${order.address.city},
                                    ${order.address.state}
                                    -
                                    ${order.address.pincode}

                                </p>

                            </div>


                        </article>

                    `;

                }
            )
            .join("");

}


/* =====================================================
   START
===================================================== */

loadOrders();