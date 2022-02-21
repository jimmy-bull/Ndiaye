const likeReducer = (state = {}, action) => {
    let nextState;
    switch (action.type) {
        case "FILL_UP_COLOR_OBJECT":
            for (let index = 0; index < action.payload.imageDataStatePayload.length; index++) {
                //setSelectedId(prev => { return { ...prev, ["heart" + index]: "hearto" } })
                nextState = {
                    ...state,
                    ["heart" + index]: "hearto"
                }
            }
            return nextState
        case "ADD_LIKE":
            state = action.payload.couleur;
            if (state["heart" + action.payload.id] != 'heart') {
                // setSelectedId(previousState => {
                //     return { ...previousState, ["heart" + id]: "heart" }
                // });
                nextState = {
                    ...state,
                    ["heart" + action.payload.id]: "heart"
                }
                return nextState
            }
            else {
                // setSelectedId(previousState => {
                //     return { ...previousState, ["heart" + id]: "hearto" }
                // });
                nextState = {
                    ...state,
                    ["heart" + action.payload.id]: "hearto"
                }
                return nextState
            }

        default:
            return state;
    }
}
export default likeReducer;