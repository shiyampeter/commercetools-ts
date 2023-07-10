import { ClientResponse, State, StateDraft } from "@commercetools/platform-sdk";
import { apiRoot } from "./client";

export const createNewState = (stateDraft: StateDraft): Promise<ClientResponse<State>> => {
    return apiRoot
        .states()
        .post({
            body: stateDraft
        })
        .execute();
}

export const getStateByKey = (key: string): Promise<ClientResponse<State>> => {
    return apiRoot
        .states()
        .withKey({ key })
        .get()
        .execute();
}

export const getStates = (): Promise<ClientResponse<any>> => {
    return apiRoot
        .states()
        .get()
        .execute();
}

export const getStateById = (ID: string) =>
    apiRoot
        .states()
        .withId({ ID })
        .get()
        .execute();


export const updateStateById = (ID: string): Promise<ClientResponse<State>> => {
    return getStateById(ID).then(state => apiRoot
        .states()
        .withId({ ID })
        .post({
            body: {
                version: state.body.version,
                "actions" : [ {
                    "action" : "setName",
                    "name" : {
                      "en" : "New Name"
                    }
                  } ]
            }
        })
        .execute()
    );
}


export const deleteStateById = (ID: string): Promise<ClientResponse<State>> => {
    return getStateById(ID).then(state => apiRoot
        .states()
        .withId({ ID })
        .delete({
            queryArgs:{
                version:state.body.version
            }
        })
        .execute()
    );
}


export const addTransition = (stateKey: string, transitionStateKeys: Array<string>): Promise<ClientResponse<State>> => {
    return getStateByKey(stateKey)
        .then(state => {
            return apiRoot
                .states()
                .withKey({ key: stateKey })
                .post({
                    body: {
                        version: state.body.version,
                        actions: [{
                            action: "setTransitions",
                            transitions: transitionStateKeys.map(key => {
                                return {
                                    typeId: "state",
                                    key
                                }
                            })
                        }]
                    }
                })
                .execute();
        });
}
