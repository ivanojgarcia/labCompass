// Import the new Channel
import { Orders } from './data/Orders';

export const totalOrders = () => {
   return Orders.reduce((groups, order) => {
        // console.log("🚀 ~ file: index.js ~ line 9 ~ totalOrders ~ order", order)
            const {customer:{id, name, email}} = order
            const key = id;
            let customerItem = {
                id,
                email,
                name,
            }
            const existCustomerGroup = groups.find(group => (group.id === key));
            if(!existCustomerGroup) {
              groups.push(customerItem);
            }
            return groups;
        }, [])
}

export const totalBilling = () => {
    let billintAmount;
    return Orders.map(order => {
        const { money, price} = order
        let amount = (money || price) ? parseFloat(money || price) : null;
        if(amount) billintAmount += amount
        return billintAmount;
    })
}


export const orderCustomer = () => {
    const orders = totalOrders()
    const billing = totalBilling();
    return {
        total_billing: billing,
        people: orders
    }
}

orderCustomer()
console.log(orderCustomer())

