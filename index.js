// Import the new Channel
import Orders from './data/Orders';

export const totalOrders = () =>
  Orders.reduce((groups, order) => {
    // console.log("🚀 ~ file: index.js ~ line 9 ~ totalOrders ~ order", order)
    const {
      customer: { id, name, email },
      price,
      money,
    } = order;
    const key = id;
    const customerItem = {
      id,
      email,
      name,
      total_billing: 0,
      quantity_orders: 0,
      avg_ticket: 0,
    };
    const existCustomerGroup = groups.find((group) => group.id === key);
    if (!existCustomerGroup) {
      const total = parseFloat(price || money);
      customerItem.total_billing += total;
      customerItem.quantity_orders++;
      customerItem.avg_ticket =
        customerItem.total_billing / customerItem.quantity_orders;
      groups.push(customerItem);
    } else {
      const total = parseFloat(price || money);
      existCustomerGroup.total_billing += total;
      existCustomerGroup.quantity_orders++;
      existCustomerGroup.avg_ticket =
        existCustomerGroup.total_billing / existCustomerGroup.quantity_orders;
    }
    return groups;
  }, []);

export const totalBilling = () =>
  Orders.reduce((sum, order) => {
    const { price, money } = order;
    const amount = parseFloat(price || money);
    return amount + sum;
  }, 0);

export const orderCustomer = () => {
  const orders = totalOrders();
  const billing = totalBilling();
  return {
    total_billing: billing,
    people: orders,
  };
};

orderCustomer();
console.log(orderCustomer());
