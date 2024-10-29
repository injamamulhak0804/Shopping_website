import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        addToCart: (state, action)=>{
            state.items.push(action.payload.item)
        },
        removeCart: (state, action)=> { 
            state.items.splice(action.payload, 1)
        },
        increaseCount: (state, action)=> {
            state.items.map((item)=> {
                if(item[0].id == action.payload){
                    item[1]++
                }
            })
        },
        decreaseCount: (state, action)=> {
            state.items.map((item)=> {
                if(item[0].id == action.payload){
                    if(item[1] > 1){
                        item[1]--
                    }
                }
            })
        },
        clearCart: (state, action)=> {
            state.items.length = 0
        }
    }
})
    
export const {addToCart, clearCart, removeCart, increaseCount, decreaseCount} = cartSlice.actions
export default cartSlice.reducer