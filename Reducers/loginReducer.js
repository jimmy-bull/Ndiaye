let initialState = {
    isLogin: false
}
const loginReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case "LOGININ":
            if (state.isLogin == false)
                nextState = {
                    ...state,
                    isLogin: true
                }
            else
                nextState = {
                    ...state,
                    isLogin: false
                }
            return nextState
        default:
            return initialState
    }
}
export default loginReducer;