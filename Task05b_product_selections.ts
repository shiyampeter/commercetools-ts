import { getProductsInStore, addProductSelectionToStore } from "./handson/store";
import {
    getProductSelectionByKey,
    createProductSelection,
    addProductsToProductSelection,
    getProductsInProductSelection
} from "./handson/productSelections";

import { log } from "./utils/logger";

const productSelectionKey = "fine-selection";

//createProductSelection(productSelectionKey, "fine Selection").then(log).catch(log);

// getProductSelectionByKey(productSelectionKey).then(log).catch(log);

//addProductsToProductSelection(productSelectionKey, ["85582"]).then(log).catch(log);

//getProductsInProductSelection(productSelectionKey).then(log).catch(log);

//addProductSelectionToStore("default", productSelectionKey).then(log).catch(log);

getProductsInStore("default").then(log).catch(log);
