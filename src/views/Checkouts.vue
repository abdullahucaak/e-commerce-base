<template>
    <CheckoutsHeader/>
    <div class="main-checkouts">
      <CartPaymentNav/>
        <div class="main-inner">
          <div class="inner-left">
                <div class="e-c">Express Checkout</div>
                <div class="icons-content">
                    <ul>
                        <li class="icons">
                            <i class="fa-brands fa-apple-pay fa-2xl"></i>
                        </li>
                        <li class="icons">
                            <i class="fa-brands fa-google-pay fa-2xl"></i>
                        </li>
                        <li class="icons">
                            <i class="fa-brands fa-paypal fa-2xl"></i>
                        </li>
                        <li class="icons">
                            <i class="fa-brands fa-cc-mastercard fa-2xl"></i>
                        </li>
                        <li class="icons">
                            <i class="fa-brands fa-cc-visa fa-2xl"></i>
                        </li>
                    </ul>
                </div>
                <div class="form-wrapper">
                  <Information v-if="componentIndex === 1" @complete="showNextComponent"/>
                  <ShippingC v-if="componentIndex === 2" @complete="showNextComponent" @previousComponent="previousComponent"/>
                  <PaymentC v-if="componentIndex === 3" @previousComponent="previousComponent"/>
                </div>
                <div class="all-rights">
                    <p><small>All rights rezerved Alaya Tea</small></p>
                </div>
            </div>
            <div class="inner-right">
                <div class="inner-right-wrapper">
                  <div v-for="chosenProduct in productStore.cartProducts" class="chosen-product">
                    <ChosenProduct :chosenProduct="chosenProduct"/>
                  </div>

                  <div class="gift-card-wrapper">
                    <div class="fields fields--2">
                        <label class="field">
                        <span class="field__label" for="discount-code">Gift card or discount code</span>
                        <input class="field__input" type="text" id="firstname" value="13E5BC6" />
                        </label>
                        <input class="button" type="submit" value="Apply">
                    </div>
                    
                  </div>
                  <div class="total-price-wrapper">
                    <div class="tp-item">Subtotal</div>
                    <div  class="tp-item tp-right">$32.33</div>
                    <div class="tp-item">Shipping</div>
                    <div class="tp-item tp-right">$5.32</div>
                    <div class="tp-item">Total</div>
                    <div class="tp-item tp-right">$32.33</div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* Import Components */
import CheckoutsHeader from '../components/CheckoutsHeader.vue';
import CartPaymentNav from '../components/CartPaymentNav.vue'
import Information from '../components/checkouts/Information.vue';
import ShippingC from '../components/checkouts/ShippingC.vue';
import PaymentC from '../components/checkouts/PaymentC.vue';
import ChosenProduct from '../components/checkouts/ChosenProduct.vue'
/* Imports */
import { ref } from 'vue';
/* pinia */
import { useProductStore } from '../stores/productStore'
const productStore = useProductStore()
/* get cartProducts with JSON */
productStore.getCartProducts()
/* get Orders with JSON */
productStore.getOrders()

/* Component Toggle */
const componentIndex = ref(1);

const showNextComponent = () =>{
  componentIndex.value++;
  console.log(componentIndex.value)
}
const previousComponent = () =>{
  componentIndex.value--;
  console.log(componentIndex.value)
}


</script>
<style scoped>

.main-checkouts .main-inner{
    display: grid;
    grid-template-columns: 6fr 4fr;
    width: 1197px;
    margin: 10px auto 0;
}
.main-checkouts .main-inner .inner-left .e-c{
    text-align: center;
    margin-bottom: 10px;
}

.main-checkouts .main-inner .inner-left .icons-content{
    display: grid;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-bottom: solid rgb(168, 168, 168) 0.5px;
}
.main-checkouts .main-inner .inner-left .icons-content ul li.icons{
    display: inline-block;
    padding: 0 15px;
    font-size: 1.5rem;
}

/* FORM CONTENT */
h1, h2{
    font-size: 1.3rem;
}
.form-wrapper{
    padding-bottom: 40px ;
    border-bottom: solid rgb(168, 168, 168) 0.5px;
}
.form-container {
  max-width: 40rem;
  padding: 40px 2rem 0;
  margin: 0 auto;
}
.form {
  display: grid;
  grid-gap: 1rem;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: .5rem;
  border-radius: .25rem;
}

.field__label {
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.25rem
}

.field__input {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
}
.field:focus-within {
  border-color: #000;
}

.fields {
  display: grid;
  grid-gap: 1rem;
}
.fields--2 {
  grid-template-columns: 1fr 1fr;
}
.fields--3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.button {
  background-color: #000;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  display: block;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  outline: 0;
}
.button:focus-visible {
  background-color: #333;
}

.form {
  display: grid;
  grid-gap: 1rem;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgb(67, 67, 67);
  padding: .5rem;
  border-radius: .25rem;
}

.field__label {
  color: var(--color-gray);
  font-size: 0.6rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.25rem
}

.field__input {
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-weight: 300;
  font-size: 1rem;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
}
.field:focus-within {
  border-color: #000;
}

.fields {
  display: grid;
  grid-gap: 1rem;
}
.fields--2 {
  grid-template-columns: 1fr 1fr;
}
.fields--3 {
  grid-template-columns: 1fr 1fr 1fr;
}

.button {
  background-color: #000;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  display: block;
  color: #fff;
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  border: 0;
  cursor: pointer;
  outline: 0;
}
.button:focus-visible {
  background-color: #333;
}
.form-footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 20px;
}
.return-to-cart{
    text-decoration: underline;
}

.all-rights{
    margin: 20px 0;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper{
  padding: 10px;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .chosen-product{
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  margin-top: 15px;
  padding: 0 1rem;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .chosen-product .cp-img{
      aspect-ratio: 1/1;
      width: 100%;
      height: auto;
      background-image: url(../assets/products/assam-black-600x600.webp);
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 10px;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .chosen-product .cp-name{
  margin-left: 20px;
  text-transform: uppercase;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .gift-card-wrapper{
  margin-top: 22px;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .total-price-wrapper{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .total-price-wrapper .tp-item{
  margin-top: 10px;
}
.main-checkouts .main-inner .inner-right .inner-right-wrapper .total-price-wrapper .tp-item:nth-child(5),
.main-checkouts .main-inner .inner-right .inner-right-wrapper .total-price-wrapper .tp-item:nth-child(6){
  font-weight: 600;
}

.main-checkouts .main-inner .inner-right .inner-right-wrapper .total-price-wrapper .tp-right{
  justify-self: end;
}

@media (min-width: 1000px) and (max-width: 1205px){
  .main-checkouts .main-inner{
    display: grid;
    grid-template-columns: 6fr 4fr;
    width: 95%;
    margin: 10px auto 0;
} 
}
@media (max-width: 1000px){
  .main-checkouts .main-inner{
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    width: 95%;
    margin: 10px auto 0;
  } 
  .main-checkouts .main-inner .inner-right{
    order: -1;
  }

  .main-checkouts .main-inner .inner-right .inner-right-wrapper{
    width: 90%;
    margin: 0 auto 30px;
    padding: 10px 10px 30px 10px;
    border-bottom: solid 0.5px #333;
  }
  .main-checkouts .main-inner .inner-left .icons-content{
    display: grid;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding-bottom: 50px;
    border-bottom: solid rgb(168, 168, 168) 0.5px;
  } 
  .main-checkouts .main-inner .inner-left .icons-content ul li.icons{
    display: inline-block;
    padding: 0 10px;
    font-size: 1rem;
  } 
}

</style>