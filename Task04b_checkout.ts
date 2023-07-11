import * as checkout from "./handson/order";
import * as discount from "./handson/discounts";
import { createPayment } from "./handson/payment";
import { log } from "./utils/logger";

const customerKey = "tt-customer1";
const cartId = "4839867c-98ea-4098-a686-434d5b40823c";
const orderId = "6e840a24-ab20-4b72-829f-aa78ad10479c";

const paymentDraft = {
    key: "payment" + Math.random().toString(36).substring(2, 7),
    amountPlanned: {
        currencyCode: "EUR",
        centAmount: 5000
    },
    pspName: "We_Do_Payments",
    pspMethod: "CREDIT_CARD",
    interfaceId: "we_pay_73636" + Math.random(), // Must be unique.
    interactionId: "pay82626" + Math.random()
}
const discountDraft = {
    "name" : {
        "en" : "Summer Sale"
      },
      "value" : {
        "type" : "relative",
        "permyriad" : 1000
      },
      "cartPredicate" : "1=1",
      "target" : {
        "type" : "lineItems",
        "predicate" : "1=1"
      },
      "sortOrder" : "0.5",
      "isActive" : true,
      "requiresDiscountCode" : false
}
// create a cart and update the cartId variable
//checkout.createCart("798b147c-538f-4886-8e1e-e4d62779d787").then(log).catch(log);

//checkout.addLineItemsToCart("4839867c-98ea-4098-a686-434d5b40823c", ["A0E200000002EGG", "A0E200000002BFW"]).then(log).catch(log);

//discount.createDiscounts(discountDraft).then(log).catch(log);
//discount.getDiscountById("41dbd88d-c232-4d79-a966-9678c5d4d7d4").then(log).catch(log);
//discount.getDiscounts().then(log).catch(log);

//heckout.addDiscountCodeToCart(cartId, "SUMMER").then(log).catch(log);
 //checkout.recalculate(cartId).then(log).catch(log);
//checkout.setShippingMethod(cartId).then(log).catch(log);

// create order from cart and update the orderId

//checkout.createOrderFromCart(cartId).then(log).catch(log);

// checkout.getOrderById(orderId).then(log).catch(log);

// set order state to confirmed and custom workflow state to order packed
// checkout.setOrderState(orderId, "Confirmed").then(log).catch(log);
// checkout.updateOrderCustomState(orderId, "tt-order-packed").then(log).catch(log);

const checkoutProcess = async () => {

    let emptyCart = await checkout.createCart("798b147c-538f-4886-8e1e-e4d62779d787");

    let filledCart = await checkout.addLineItemsToCart(
        emptyCart.body.id, ["A0E200000002EGG", "A0E200000002BFW"]
    );

    // filledCart = await checkout.addDiscountCodeToCart(
    //     filledCart.body.id, "SUMMER"
    // );


    filledCart = await checkout.recalculate(filledCart.body.id);
    filledCart = await checkout.setShippingMethod(filledCart.body.id);

    const payment = await createPayment(paymentDraft);
    filledCart = await checkout.addPaymentToCart(filledCart.body.id, payment.body.id);

    let order = await checkout.createOrderFromCart(filledCart.body.id);
    order = await checkout.setOrderState(order.body.id, "Confirmed");
    order = await checkout.updateOrderCustomState(order.body.id, "tt-order-packed");
    if (order) {
        return {
            status: 201,
            message: "order created: " + order.body.id,
        };
    }
};

checkoutProcess().then(log).catch(log);
