import { apiRoot } from "./client";
import { ClientResponse, Product, ProductDraft, ProductData } from "@commercetools/platform-sdk";

export const getProductById = (ID: string): Promise<ClientResponse<Product>> => {
    return apiRoot
        .products()
        .withId({ ID })
        .get()
        .execute();
}

export const getProductByKey = (key: string): Promise<ClientResponse<Product>> => {
    return apiRoot
        .products()
        .withKey({ key })
        .get()
        .execute();
}

export const createProduct = (productDraft: ProductDraft): Promise<ClientResponse<Product>> => {
    return apiRoot
        .products()       
        .post({
            body: productDraft
        })
        .execute();
}

// export const updateProduct = (address: any,ID: string): Promise<ClientResponse<Customer>> => {
//     return getCustomerById(ID).then(customer => apiRoot
//         .customers()
//         .withId({ ID })
//         .post({
//             body: {
//                 version: customer.body.version,
//                 actions: [{
//                     action: "addAddress",
//                     address:address                
//                 }]
//             }
//         })
//         .execute()
//     );
// }

// export const updateCustomerAddress = (address: any,ID: string): Promise<ClientResponse<Customer>> => {
//     return getCustomerById(ID).then(customer => apiRoot
//         .customers()
//         .withId({ ID })
//         .post({
//             body: {
//                 version: customer.body.version,
//                 actions: [{
//                     action: "changeAddress",
//                     addressId: customer.body.addresses[0].id,
//                     address: address                
//                 }]
//             }
//         })
//         .execute()
//     );
// }

// export const removeCustomerAddress = (ID: string): Promise<ClientResponse<Customer>> => {
//     return getCustomerById(ID).then(customer => apiRoot
//         .customers()
//         .withId({ ID })
//         .post({
//             body: {
//                 version: customer.body.version,
//                 actions: [{
//                     action: "removeAddress",
//                     addressId: customer.body.addresses[0].id,               
//                 }]
//             }
//         })
//         .execute()
//     );
// }

// export const createCustomerToken = (customer: ClientResponse<Customer>): Promise<ClientResponse<CustomerToken>> => {
//     return apiRoot
//     .customers()
//     .emailToken()
//     .post({
//         body: {
//             id: customer.body.id,
//             ttlMinutes: 90
//         }
//     })
//     .execute();
// }

// export const confirmCustomerEmail = (token: ClientResponse<CustomerToken>): Promise<ClientResponse<Customer>> => {
//     return apiRoot
//     .customers()
//     .emailConfirm()
//     .post({
//         body: {
//             tokenValue: token.body.value
//         }
//     })
//     .execute();
// }

// export const assignCustomerToCustomerGroup = (
//     customerKey: string,
//     customerGroupKey: string
// ): Promise<ClientResponse<Customer>> => {
//     throw new Error("Function not implemented")
// }

