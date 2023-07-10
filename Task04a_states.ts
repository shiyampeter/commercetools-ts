import { StateDraft } from "@commercetools/platform-sdk";
import * as states from "./handson/states";
import { log } from "./utils/logger";

const orderPackedStateDraft: StateDraft = {
    key: "test-state2",
    type: "OrderState",
    name: {
        de: "TT Order Packed1 ",
        en: "TT Order Packed1 ",
    },
    initial: true,
};

const orderStateDraft: StateDraft = {
    key: "test-state4",
    type: "OrderState",
    roles:[],
    initial: true,
};

const orderCompletedStateDraft: StateDraft = {
    key: "tt-order-completed",
    type: "OrderState",
    name: {
        de: "TT Order Completed ",
        en: "TT Order Completed ",
    },
    initial: false,
};

const createStatesWithTransitions = async () => {
    let orderPackedState = await states.createNewState(orderPackedStateDraft)
    let orderCompletedState = await states.createNewState(orderCompletedStateDraft)

    orderPackedState = await states.addTransition(orderPackedState.body.key, [orderCompletedState.body.key])

    orderCompletedState = await states.addTransition(orderCompletedState.body.key, [])

    return orderPackedState;
};

//createStatesWithTransitions().then(log).catch(log)

//states.createNewState(orderStateDraft).then(log).catch(log)
//states.getStates().then(log).catch(log)
//states.updateStateById("3bfdfc0d-b2fc-483f-988e-3fcd28683c38").then(log).catch(log)
//states.deleteStateById("ce73df3a-dcef-482b-92e8-94db9873089d").then(log).catch(log)
states.getStateById("ce73df3a-dcef-482b-92e8-94db9873089d").then(log).catch(log)
//states.getStateByKey(orderPackedStateDraft.key).then(log).catch(log)