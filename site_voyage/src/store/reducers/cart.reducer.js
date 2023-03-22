import { createReducer } from "@reduxjs/toolkit";
import { destinationAdd, destinationDelete } from "../actions/cart.action";
const initialState = {
    destination: []
}

const destinationReducer = createReducer(initialState, builder => {
    builder
        .addCase(destinationAdd, (state, action) => {
            state.destination.push(action.payload)
        })
        .addCase(destinationDelete, (state,action) => {
            state.destination = state.destination.filter(city => city.selectId !== action.payload)
        })
})


export default destinationReducer