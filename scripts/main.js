import { MetalOptions } from "./MetalOptions.js"
import { placeOrder } from "./PlaceOrder.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { Orders } from "./Orders.js"


const container = document.querySelector("#container")


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const placeOrderBtn = placeOrder()
    const ordersList = await Orders()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${placeOrderBtn}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersList}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderPlaced", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render ()
