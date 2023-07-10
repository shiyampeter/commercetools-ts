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


export const getProducts = (): Promise<ClientResponse<any>> => {
    return apiRoot
        .products()
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

export const updateProduct = (ID: string): Promise<ClientResponse<Product>> => {
    return getProductById(ID).then(product => apiRoot
        .products()
        .withId({ ID })
        .post({
            body: {
                version: product.body.version,
                "actions" : [ {
                    "action" : "setDescription",
                    "description" : {
                      "en" : "The best product ever!"
                    }
                  } ]
            }
        })
        .execute()
    );
}

export const deleteProductById = (ID: string): Promise<ClientResponse<Product>> => {
    return getProductById(ID).then(product => apiRoot
        .products()
        .withId({ ID })
        .delete({
            queryArgs:{
                version:product.body.version
            }
        })
        .execute()
    );
}


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

