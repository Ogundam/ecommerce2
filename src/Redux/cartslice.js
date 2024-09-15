import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    name: "cart",
    initialState:{
        totalItem : 0,
        products: [],
        totalprice: 0,
    },

    reducers: {
        addtocart: function(state, {payload}){
            let finditem = state.products.find((each) => each.id == payload.id);

            if(finditem == undefined){
                state.products.push({
                    id: payload.id,
                    name: payload.title,
                    price: payload.price,
                    image: payload.image,
                    qty: 1,
                    amount: payload.price
                })

                state.totalItem++
                state.totalprice = payload.price
            
            }else{
                finditem.qty++
                finditem.amount = parseInt(finditem.amount) + parseInt(payload.price)
                state.totalprice = parseInt(state.totalprice) + parseInt(payload.price)
                
            }
        }
    }
})

export default cartslice.reducer
export const { addtocart } = cartslice.actions