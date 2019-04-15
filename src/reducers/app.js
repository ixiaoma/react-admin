//action types
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

//reducer
export default function (state, action) {
    if (!state) {
        state = {
            data:{},
        }
    }
    switch (action.type) {
        case REQUEST_DATA:
            return { ...state, spinLoading: action.spinLoading }
        default:
            return state
    }
}

// action creators
export const httpData = () => {
    return { type: REQUEST_DATA}
}
