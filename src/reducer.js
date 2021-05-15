export const initialState = {
    input : [],
}

export const ACTIONS = {
    SET_INPUT: 'set-input',  
}

export function reducer(state, action) {

    console.log(`state`, state)
    console.log(`actionP`, action.payload.input)

    switch (action.type) {
        
        case ACTIONS.SET_INPUT:
            return {
                input : [
                    ...state.input,
                    action.payload.input
                ]
            }
        default:
            return state;
    }
}