import { apiRoot } from "./client";
import { ClientResponse, DirectDiscount, DiscountCodeDraft, CartDiscountDraft, CartDiscount } from "@commercetools/platform-sdk";

export const getDiscountById = (ID: string): Promise<ClientResponse<CartDiscount>> => {
    return apiRoot
        .cartDiscounts()
        .withId({ ID })
        .get()
        .execute();
}




export const getDiscounts = (): Promise<ClientResponse<any>> => {
    return apiRoot
        .products()
        .get()
        .execute();
}

export const createDiscounts = (discountDraft: any): Promise<ClientResponse<CartDiscount>> => {
    return apiRoot
        .cartDiscounts()       
        .post({
            body: discountDraft
        })
        .execute();
}

// export const updateProduct = (ID: string): Promise<ClientResponse<Product>> => {
//     return getProductById(ID).then(product => apiRoot
//         .products()
//         .withId({ ID })
//         .post({
//             body: {
//                 version: product.body.version,
//                 "actions" : [ {
//                     "action" : "setDescription",
//                     "description" : {
//                       "en" : "The best product ever!"
//                     }
//                   } ]
//             }
//         })
//         .execute()
//     );
// }

// export const deleteProductById = (ID: string): Promise<ClientResponse<Product>> => {
//     return getProductById(ID).then(product => apiRoot
//         .products()
//         .withId({ ID })
//         .delete({
//             queryArgs:{
//                 version:product.body.version
//             }
//         })
//         .execute()
//     );
// }




