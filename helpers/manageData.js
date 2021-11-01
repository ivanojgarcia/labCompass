const customer = (customerData = []) => {
    let quantityOrders, avgTicket;

    quantityOrders = customerData.length;
    // quantityOrders = customerData.length();
    const peopleData = customerData.map(data => {
    // console.log("🚀 ~ file: manageData.js ~ line 7 ~ customer ~ data", data)
        const { money, price } = data
        let amount = parseFloat(money || price);
        console.log("🚀 ~ file: manageData.js ~ line 10 ~ customer ~ amount", amount)
        avgTicket += amount
        return {
            name: data.customer.name,
            email: data.customer.email,
            avg_ticket: avgTicket,
            quantity_orders: quantityOrders
        }
    })
    return peopleData;
}

const customerShopping = (id = 0, orders = []) => {
    const ordersCusomers = orders.filter(order => order.customer.id === id)
    let quantityOrders = ordersCusomers.length;
    let avgTicket = 0;
    return ordersCusomers.map(order => {
        const {money, price } = order;
        let amount = parseFloat(money || price);
        avgTicket = amount + avgTicket
        return {
            id: order.customer.id,
            email: order.customer.email,
            name: order.customer.name,
            quantity_orders: quantityOrders,
            avg_ticket: avgTicket / quantityOrders
        }
    });
}


export {customerShopping}