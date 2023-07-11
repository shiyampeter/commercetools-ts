import { CustomerSignin } from "@commercetools/platform-sdk";
import * as checkout from "./handson/order";
import { log } from "./utils/logger";

const customerKey = "tt-customer";

const mergingProcessTest = async () => {
    let anonymousCart = await checkout.createAnonymousCart();

    let customerCart = await checkout.createCart("798b147c-538f-4886-8e1e-e4d62779d787");

    anonymousCart = await checkout.addLineItemsToCart(anonymousCart.body.id, [ "A0E200000002BFW"]);

    customerCart = await checkout.addLineItemsToCart(customerCart.body.id, ["A0E200000002EGG"]);

    log("Anonymous Cart: " + anonymousCart.body.id);
    log("Customer Cart: " + customerCart.body.id);

    const customerDetails: CustomerSignin = {
        email: "test@test.com",
        password: "password",
        anonymousCartId: anonymousCart.body.id,
        anonymousCartSignInMode: "MergeWithExistingCustomerCart", // try switching to UseAsNewActiveCustomerCart
    };

    let result = await checkout.customerSignIn(customerDetails);
    return result.body.cart;
};

mergingProcessTest()
    .then((cart) => { 
        log("Active cart: " + cart!.id);
        cart!.lineItems.forEach(item => {
            log(item.variant.sku + " :" + item.quantity);
        });
    })
    .catch(log);
