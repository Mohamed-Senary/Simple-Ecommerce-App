import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"

const cartSlice = createSlice ({
    name: "cart",

    initialState:{
        items:[],
        cartCount: 0,
    },
    reducers:{
        addTocart: (state ,action)=>{
            const targetItem =  state.items.find ((item)=> item.id === action.payload.item.id)
            if (targetItem)
                targetItem.qty += action.payload.item.qty
            else {
                state.items.push(action.payload.item)
                state.cartCount += 1
            }
        },

        removeFromcart: (state, action)=>{
            const targetItem = state.items.find ((item)=> item.id === action.payload)
            state.items = state.items.filter((item)=> item.id != action.payload)
            state.cartCount -= 1
            console.log(targetItem.price)
        },

        adjustQty: (state , action)=>{
            const targetItem = state.items.find ((item)=>item.id === action.payload.id)
            if (action.payload.type === true){
                if (targetItem.qty > 0){
                    targetItem.qty -= 1
                }    
            }
                
            else {
                targetItem.qty += 1 
            }

        }
    }
})

export const {addTocart,removeFromcart,adjustQty} = cartSlice.actions;
export default cartSlice.reducer;