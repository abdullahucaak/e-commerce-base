<template>
    <div class="form-container">
        <form class="form">
            <InfoToChange/>
            <h2>Shipping Method</h2>
            <div class="shipping-method">
                <label class="shipping-grid" for="option1">
                    <input type="radio" id="option1" name="options" value="option1">
                    <div class="shipping-option">
                        <p>USPS First Class Package</p>
                        <p>Estimated delivery Wednesday, Jun 7</p>
                    </div>
                    <div class="shipping-price">
                        $4.44
                    </div>
                </label>
                
                <label class="shipping-grid" for="option2">
                    <input type="radio" id="option2" name="options" value="option2">
                    <div class="shipping-option">
                        <p>USPS Ground</p>
                        <p>Estimated delivery Thursday, Jun 8</p>
                    </div>
                    <div class="shipping-price">
                        $9.44
                    </div>
                </label>
            </div>
            <div class="form-footer">
                <div class="return-to-cart">
                    <span class="back-icon"></span>
                    <button class="r-btn" @click="previousComponent">Return to Information</button>
                </div>
                <div class="submit-button">
                    <input @click="completeForm" class="button" type="submit" value="Continue to Payment">
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import InfoToChange from './InfoToChange.vue' 

const emit = defineEmits(['complete','previousComponent'])
const completeForm = () => {
  emit('complete')
}
const previousComponent = () => {
  emit('previousComponent')
}
</script>

<style scoped>

 form .information-to-change{
    border: solid 0.5px black;
    border-radius: 10px;
    margin-bottom: 50px;
}
 form .itc-inner{
    margin: 10px;
    padding: 10px;
}
 form .itc-inner .itc-grid{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    font-size: 0.8rem;
}
 form .itc-inner .contact{
    border-bottom: solid black 0.5px;
    padding-bottom: 20px;
}
 form .itc-inner .ship-to{
    padding-top: 20px;
}

 form .itc-inner .itc-grid div:nth-child(2){
    font-weight: 500;
    font-size: 0.9rem;
}
 form .itc-inner .itc-grid div:last-child{
    text-decoration: underline;
}
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
}
 form .shipping-method .shipping-grid:first-child{
    border-bottom: solid black 0.5px;
}
 form .shipping-method .shipping-grid .shipping-option p:last-child{
    font-size: 0.7rem;
}
 form .shipping-method .shipping-grid .shipping-price{
    justify-self: end;
    align-self: center;
}
 form .shipping-method .shipping-grid input{
    height: 20px;
}

/* FORM CONTENT */
h1, h2{
    font-size: 1rem;
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
.form-footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-top: 20px;
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