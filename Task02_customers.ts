import { CustomerDraft } from "@commercetools/platform-sdk";
import {
    createCustomer,
    updateCustomer,
    updateCustomerAddress,
    removeCustomerAddress,
    getCustomerById,
    getCustomerByKey,
    createCustomerToken,
    confirmCustomerEmail,
    assignCustomerToCustomerGroup,
} from "./handson/customer";
import { log } from "./utils/logger";

const customerDraft: CustomerDraft = {
    firstName: "Peter",
    lastName: "Tester",
    email: "Peter@test.com",
    password: "password",
    key: "tt-customer1",
    addresses: [
        {
            country: "DE",
            key: "tt-customer-address"
        }
    ],
    defaultBillingAddress: 0,
    defaultShippingAddress: 0
};

type address = {
    firstName:string,
    lastName?:string,
    country:string,
    key:string,
}
const customerDraftForAddAddress: address = {               
    firstName: "Peter",
    //lastName: "Tester",
    country: "DE",
    key: "tt-customer-address3"       
   
};



const id:string = "c5f9631a-b612-495b-a5de-5dccf0ad1ab9";

//createCustomer(customerDraft).then(log).catch(log);
// updateCustomer(customerDraftForAddAddress,id).then(log).catch(log);
//updateCustomerAddress(customerDraftForAddAddress,id).then(log).catch(log);
removeCustomerAddress(id).then(log).catch(log);
//getCustomerById(id).then(log).catch(log);
//getCustomerByKey(customerDraft.key!).then(log).catch(log);

// getCustomerByKey(customerDraft.key!)
//     .then(createCustomerToken)
//     .then(confirmCustomerEmail)
//     .then(log)
//     .catch(log);

// assignCustomerToCustomerGroup(customerDraft.key!, "indoor-customers")
//     .then(log)
//     .catch(log);
