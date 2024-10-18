import { savePlacedOrder } from "./TransientState.js"

const  handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        savePlacedOrder()
    }
}

export const placeOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick)

    return "<button id='saveOrder'>Place Order</button>"
}