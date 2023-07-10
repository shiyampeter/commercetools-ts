import { apiRoot } from "./client";
import { ClientResponse, Customer, CustomerDraft, CustomerSignInResult, CustomerToken } from "@commercetools/platform-sdk";

export const getCustomerById = (ID: string): Promise<ClientResponse<Customer>> => {
    return apiRoot
        .customers()
        .withId({ ID })
        .get()
        .execute();
}

export const getCustomerByKey = (key: string): Promise<ClientResponse<Customer>> => {
    return apiRoot
        .customers()
        .withKey({ key })
        .get()
        .execute();
}

export const createCustomer = (customerDraft: CustomerDraft): Promise<ClientResponse<CustomerSignInResult>> => {
    return apiRoot
        .customers()       
        .post({
            body: customerDraft
        })
        .execute();
}

export const updateCustomer = (address: any,ID: string): Promise<ClientResponse<Customer>> => {
    return getCustomerById(ID).then(customer => apiRoot
        .customers()
        .withId({ ID })
        .post({
            body: {
                version: customer.body.version,
                actions: [{
                    action: "addAddress",
                    address:address                
                }]
            }
        })
        .execute()
    );
}

export const updateCustomerAddress = (address: any,ID: string): Promise<ClientResponse<Customer>> => {
    return getCustomerById(ID).then(customer => apiRoot
        .customers()
        .withId({ ID })
        .post({
            body: {
                version: customer.body.version,
                actions: [{
                    action: "changeAddress",
                    addressId: customer.body.addresses[0].id,
                    address: address                
                }]
            }
        })
        .execute()
    );
}

export const removeCustomerAddress = (ID: string): Promise<ClientResponse<Customer>> => {
    return getCustomerById(ID).then(customer => apiRoot
        .customers()
        .withId({ ID })
        .post({
            body: {
                version: customer.body.version,
                actions: [{
                    action: "removeAddress",
                    addressId: customer.body.addresses[0].id,               
                }]
            }
        })
        .execute()
    );
}

export const createCustomerToken = (customer: ClientResponse<Customer>): Promise<ClientResponse<CustomerToken>> => {
    return apiRoot
    .customers()
    .emailToken()
    .post({
        body: {
            id: customer.body.id,
            ttlMinutes: 90
        }
    })
    .execute();
}

export const confirmCustomerEmail = (token: ClientResponse<CustomerToken>): Promise<ClientResponse<Customer>> => {
    return apiRoot
    .customers()
    .emailConfirm()
    .post({
        body: {
            tokenValue: token.body.value
        }
    })
    .execute();
}

export const assignCustomerToCustomerGroup = (
    customerKey: string,
    customerGroupKey: string
): Promise<ClientResponse<Customer>> => {
    throw new Error("Function not implemented")
}

