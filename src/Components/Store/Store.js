import create from "zustand";
import produce from "immer";
import Object from "../../Object/Object";

const Store = create((set) => ({
  data: Object,
  myCartObj: [],
  wishlistObj: [],
  subtotal: 0,
  total: 0,
  id: null,
  percentage: 0,

  //function Id olish 
  cartId: (ids) =>
    set((state) => ({id: ids})),

  //function Mycart add qilsh

  myCartAdd: (ids) =>
    set(
      produce((state) => {
        const produc = state.myCartObj.find(item => item.id === ids.id)
        if(!produc) {
          state.myCartObj.push(ids)
          state.subtotal += ids.to_price
          state.total += ids.to_price
          state.percentage = (state.subtotal * 100) % 200
        }else {
          state.myCartObj.map(item => {
            if(item.id === ids.id) {
              state.subtotal += ids.to_price
              state.total += ids.to_price
              state.percentage = (state.subtotal * 100) % 200
              return item.count += 1
            }
          })
        }
      })
    ),

  //function Mycart o'chirish
  myCartDel: (ids) =>
  set(
    produce((state) => {
      state.subtotal -= ids.to_price * ids.count
      state.total -= ids.to_price * ids.count
      state.myCartObj = state.myCartObj.filter(item => item.id !== ids.id)
    })
  ),

  //function Mycart minus qilsh
  myCartMinus: (ids) =>
    set(
      produce((state) => {
        const produc = state.myCartObj.find(item => item.id === ids.id)
        if(produc.count !== 1) {
          state.myCartObj.map(item => {
            if(item.id === ids.id) {
              state.total -= ids.to_price
              state.subtotal -= ids.to_price
              return item.count -= 1
            }
          })
        }
      })
    ),

  //function Like
  addWishlist: (ids) =>
    set(
      produce((state) => {
        const product = state.data.find(item => item.id === ids.id)
        if(!product.like) {
          state.data.map(item => {
            if(item.id === ids.id) {
              state.wishlistObj.push(ids)
              return item.like = true
            }
          })
        } else {
          state.data.map(item => {
            if(item.id === ids.id) {
              state.wishlistObj = state.wishlistObj.filter(like => like.id !== ids.id)
              return item.like = false
            }
          })
        }
      })
    ),
}))

export default Store;