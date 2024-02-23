// how to do?
const initialState = 10;
const incDec = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state; 
    }
}

export default incDec;
