import { ProductDraft } from "@commercetools/platform-sdk";
import {
    createProduct,
    updateProduct,
    getProductById,
    getProductByKey,
    deleteProductById,
    getProducts
} from "./handson/product";
import { log } from "./utils/logger";

const productDraft: ProductDraft = {
    "productType" : {
      "id" : "ff0d7a38-98b4-4565-bf9d-abe541af4993",
      "typeId" : "product-type"
    },
    "categories" : [ {
      "typeId" : "category",
      "id" : "fc84992e-7bef-4ff4-b4c0-65f6c41499e2"
    } ],
    "name" : {
      "en" : "Some Product"
    },
    "slug" : {
      "en" : "product_slug"
    },
    "masterVariant" : {
      "sku" : "SKU-1",
      "prices" : [ {
        "value" : {
          "currencyCode" : "EUR",
          "centAmount" : 4200
        }
      } ],
      "images" : [ {
        "url" : "http://my.custom.cdn.net/master.png",
        "label" : "Master Image",
        "dimensions" : {
          "w" : 303,
          "h" : 197
        }
      } ]
    },
    "variants" : [ {
      "images" : [ {
        "url" : "http://my.custom.cdn.net/variant.png",
        "label" : "Variant Image",
        "dimensions" : {
          "w" : 303,
          "h" : 197
        }
      } ]
    } ]
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



const id:string = "94778518-bacb-4d35-8014-bcad6bc7d5c4";

//createProduct(productDraft).then(log).catch(log);

//getProductById(id).then(log).catch(log);
//getProductByKey("85582").then(log).catch(log);
//deleteProductById(id).then(log).catch(log);
getProducts().then(log).catch(log);
//updateProduct(id).then(log).catch(log);
// getCustomerByKey(customerDraft.key!)
//     .then(createCustomerToken)
//     .then(confirmCustomerEmail)
//     .then(log)
//     .catch(log);

// assignCustomerToCustomerGroup(customerDraft.key!, "indoor-customers")
//     .then(log)
//     .catch(log);
