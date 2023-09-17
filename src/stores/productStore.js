import axios from 'axios';
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [
      
    ],
    cartProducts:[

    ],
    orders:[
      
    ],
    loading:false,
    shippingMethodView: false
  }),
  getters: { /* computed */
    /* shop-page | how many products are */
    totalProducts:(state) => {
    return state.products.length 
    },
    bestSellingProducts: (state) => {
      return state.products.filter((product) => product.bestSelling)
    },
    /* calculate subtotal */
    calculateSubtotal:(state) => {
      let subtotal = 0
      for( const p of state.cartProducts ){
        subtotal += Number(p.totalPrice)
      }
      return subtotal
    }
  },
  actions:{
    /* get Products with JSON */
    async getProducts() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/products');
    
        if (response.status !== 200) {
          throw new Error('Failed to fetch products.');
        }
    
        this.products = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
    /* get cartProducts with JSON */
    async getCartProducts() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/cartProducts');
    
        if (response.status !== 200) {
          throw new Error('Failed to fetch cart products.');
        }
    
        this.cartProducts = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
    /* get orders with JSON */
    async getOrders() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3000/orders');
    
        if (response.status !== 200) {
          throw new Error('Failed to fetch orders.');
        }
    
        this.orders = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
    /* add product to cart */
    async addCartProduct(cartProduct){
      const existingProduct = this.cartProducts.find( p => p.id === cartProduct.id)
      if(existingProduct){
         existingProduct.quantity += cartProduct.quantity
         existingProduct.totalPrice = Number(existingProduct.price * existingProduct.quantity).toFixed(2);

         try{
          const patchRes = await fetch('http://localhost:3000/cartProducts/' + cartProduct.id, {
            method: 'PATCH',
            body: JSON.stringify(
              {
                quantity: existingProduct.quantity,
                totalPrice: existingProduct.totalPrice
              }),
            headers: { 'Content-Type' : 'application/json' }
         })
         if(!patchRes.ok){
          throw new Error('Failed to add update cart product.')
         }
        }catch(error){
          console.log(error)
        }
      }else{
        // Add it as a new item
        this.cartProducts.push(cartProduct);
        
        try{
          const res = await fetch('http://localhost:3000/cartProducts', {
            method: 'POST',
            body: JSON.stringify(cartProduct),
            headers: { 'Content-Type' : 'application/json'}
          })
          if(!res.ok){
            throw new Error('Failed to add product to cart.')
          }
        } catch(error){
          console.log(error)
        }
      }
      console.log("existingProduct:" + existingProduct)
    },
   /* delete product from cart */
    async deleteProduct(id){
      this.cartProducts = this.cartProducts.filter( p => {
        return p.id !== id
      })

      const res = await fetch('http://localhost:3000/cartProducts/' + id ,{
        method: 'DELETE'
      })
      if(res.error){
        console.log(res.error)
      }
    }
  }
})
