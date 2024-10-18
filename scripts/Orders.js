export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map(
        (order) => {

            const orderPrice = order.metal.price + order.style.price + order.size.price
            const formattedPrice = orderPrice.toLocaleString('en-US')

            return `<article id="orderPlaced" value="${order.id}">Order #${order.id} cost $${formattedPrice}</article>`
        }
    ).join("")

    return ordersHTML
}