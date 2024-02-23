// what to do?
// ------------------ COUNTER ------------------------
// 1. increment
export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}
// 2. decrement
export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

// ------------------ TODO ------------------------
