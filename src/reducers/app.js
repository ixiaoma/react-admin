//action types
export const IS_MOBILE = 'IS_MOBILE';

//reducer
export default function (state, action) {
    if (!state) {
        state = {
            isMobile:false
        }
    }
    switch (action.type) {
        case IS_MOBILE:
            return { ...state,isMobile:action.isMobile}
        default:
            return state
    }
}

// action creators
export const responClient = (isMobileBoolen) => {//响应式
    return { type: IS_MOBILE,isMobile:isMobileBoolen}
}
