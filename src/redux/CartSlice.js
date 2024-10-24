import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
 name:'cart',
 initialState:[],
 reducers:{
    addProductToMyCart(state,action){
      let myIndex= -1;
      state.map((item,index)=>{
         if(item.id==action.payload.id){
            myIndex=index;
         }
        
      });
      
      if(myIndex== -1){
         state.push({
            brand:action.payload.brand,
            id:action.payload.id,
            imageURL:action.payload.imageURL,
            name:action.payload.name,
            price:action.payload.price,
            qty:action.payload.qty+1,
         });
         
      }
      else{
         state[myIndex].qty=state[myIndex].qty+1;
      }
    },

    removeProductFromCart(state,action){
       let myIndex=state.findIndex(item=>item.id===action.payload.id);
    
       if(myIndex!==-1){
        const currentItem=state[myIndex];
        if(currentItem.qty>1){
         currentItem.qty -=1;

        }
        else{
         state.splice(myIndex,1);
        }
       }
    }
 }
})

export const {addProductToMyCart,removeProductFromCart}=CartSlice.actions;
export default CartSlice.reducer;