<template>
    <div class="form-container">
        <form class="form">
            <InfoToChange/>
            <h2>Payment</h2>
            <p class="payment-info">All transactions are secure and encrypted.</p>
            <div class="shipping-method">
                <label class="shipping-grid" for="option1">
                    <input type="radio" id="option1" name="options" value="option1">
                    <div class="shipping-option">
                        <p>Credit Cart</p>
                    </div>
                    <div class="shipping-price">
                        $4.44
                    </div>
                </label>

                <div class="payment-info-inner">
                    <label class="field">
                        <span class="field__label" for="cart-number">Cart Number</span>
                        <input class="field__input" type="text" id="cart-number" />
                    </label>
                    <label class="field">
                        <span class="field__label" for="name-on-cart">Name On Cart</span>
                        <input class="field__input" type="text" id="name-on-cart" />
                    </label>
                    <div class="fields fields--2">
                        <label class="field">
                        <span class="field__label" for="expiration-date">Expiration Date ( MM / YY)</span>
                        <input class="field__input" type="date" id="expiration-date" />
                        </label>
                        <label class="field">
                        <span class="field__label" for="security-code">Security Code</span>
                        <input class="field__input" type="text" id="security-code" />
                        </label>
                    </div>

                </div>
            </div>
            <div class="form-footer">
                <div class="return-to-cart">
                    <span class="back-icon"></span>
                    <button class="r-btn" @click="previousComponent">Return to Shipping</button>
                </div>
                <div class="submit-button">
                    <input class="button" type="submit" value="Pay now">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import InfoToChange from './InfoToChange.vue'

const emit = defineEmits(['previousComponent'])
const previousComponent = () => {
  emit('previousComponent')
}
</script>

<style scoped>
/* SHIPPING METHOD */
form .shipping-method{
    border: solid black 1px;
    border-radius: 10px;
    font-size: 0.9rem;
}
form .shipping-method .shipping-grid{
    display: grid;
    grid-template-columns: 1fr 10fr 2fr;
    padding: 20px;
    align-items: center;
}
form .shipping-method .shipping-grid:first-child{
    border-bottom: solid black 0.5px;
}
form .shipping-method .shipping-grid .shipping-option p{
    font-weight: 600;
}
form .shipping-method .shipping-grid .shipping-price{
    justify-self: end;
    align-self: center;
}
form .shipping-method .shipping-grid input{
    height: 20px;
}

.payment-info-inner{
    padding: 20px;
}
.payment-info-inner label{
    padding-bottom: 20px;
}

/* FORM CONTENT */
h1, h2{
    font-size: 1rem;
}
p.payment-info{
    font-size: 0.8rem;
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
  margin-bottom: 20px ;
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
.back-icon{
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    margin-bottom: 2px;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(225deg);
    transition: transform 0.3s;
}
.r-btn{
    margin-left: 3px;
    font-family: 'Montserrat', sans-serif;
    background-color: white;
    font-size: 0.95rem;
    letter-spacing: 0.06rem;
}
</style>