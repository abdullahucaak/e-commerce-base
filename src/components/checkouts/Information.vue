<template>
  <div class="form-container">
    <form @submit.prevent="completeForm" class="form">
        <h1>Contact</h1>
        <div class="fields">
            <label 
              class="field"
              :class="{ invalid: !isValidEmail}"
            >
            <span class="field__label" for="email">Email</span>
            <input 
              v-model="email" 
              class="field__input" 
              type="text" 
              id="email" 
              autofocus 
              required 
            />
            </label>
            <p 
              v-if="!isValidEmail"
              class="invalid-message"
              ><small>Enter a valid email.</small>
            </p>
        </div>

        <h2>Shipping address</h2>
        <p><small>Please enter your shipping details.</small></p>
        <div class="fields fields--2">
          <div>
            <label 
             class="field"
             :class="{ invalid: !isValidFirstName}"
            >
            <span class="field__label" for="firstname">First name</span>
            <input 
              v-model="firstName" 
              class="field__input" 
              type="text" 
              id="firstname" 
              required  
            />
          </label>
          <span 
              v-if="!isValidFirstName"
              class="invalid-message"
              ><small>Enter a name.</small>
            </span>
          </div>
          <div>
            <label 
            class="field"
            :class="{ invalid: !isValidLastName}"
          >
            <span class="field__label" for="lastname">Last name</span>
            <input 
              v-model="lastName" 
              class="field__input" 
              type="text" 
              id="lastname" 
              required 
            />
            </label>
            <span 
              v-if="!isValidLastName"
              class="invalid-message"
              ><small>Enter a last name.</small>
            </span>
          </div>
        </div>
        <label 
          class="field"
          :class="{ invalid: !isValidShippingAddress}"
        >
            <span class="field__label" for="address">Address</span>
            <input 
              v-model="shippingAddress" 
              class="field__input" 
              type="text" 
              id="address" 
              required 
            />
        </label>
        <span 
          v-if="!isValidShippingAddress"
          class="invalid-message"
          ><small>Enter a Address.</small>
        </span>
        <div class="fields fields--3">
          <div>
            <label 
              class="field"
              :class="{ invalid: !isValidZipCode}"            
            >
            <span class="field__label" for="zipcode">Zip code</span>
            <input 
              v-model="zipCode" 
              class="field__input" 
              type="text" 
              id="zipcode" 
              required 
            />
            </label>
            <span 
              v-if="!isValidZipCode"
              class="invalid-message"
              ><small>Enter a zip code.</small>
            </span>
          </div>
            <div>
              <label 
                class="field"
                :class="{ invalid: !isValidCity}"
              >
              <span class="field__label" for="city">City</span>
              <input 
                v-model="city" 
                class="field__input" 
                type="text" 
                id="city" 
                required 
              />
              </label>
              <span 
              v-if="!isValidCity"
              class="invalid-message"
              ><small>Enter a city.</small>
            </span>
            </div>
            <div>
              <label 
                  class="field"
                  :class="{ invalid: !isValidCountry}"
                >
                <span class="field__label" for="country">Country</span>
                <select v-model="country" class="field__input" id="country" required>
                <option value="turkiye" > Turkiye </option>
                <option value="greece" disabled>Greece</option>
                </select>
              </label>
              <span 
                v-if="!isValidCountry"
                class="invalid-message"
                ><small>Enter a country.</small>
              </span>
            </div>
        </div>
        <label 
          class="field"
          :class="{ invalid: !isValidPhoneNumber}"
        >
          <span class="field__label" for="phone-number">Phone Number</span>
          <input 
            v-model="phoneNumber" 
            class="field__input" 
            type="tel" 
            id="phone-number" 
            required
          />
        </label>
        <span 
              v-if="!isValidPhoneNumber"
              class="invalid-message"
              ><small>Enter a valid phone number.</small>
            </span>
        <div class="form-footer">
            <div class="return-to-cart">
                <span class="back-icon"></span>
                <RouterLink :to="{name:'cart'}"> Return to cart</RouterLink>
            </div>
            <div class="submit-button">
                <input 
                  type="submit"
                  :disabled="!isValidEmail || !isValidFirstName || !isValidLastName || !isValidShippingAddress || !isValidZipCode || !isValidCity || !isValidCountry || !isValidPhoneNumber"
                  class="button" 
                  value="Continue to Shipping"
                >
            </div>
        </div>
    </form>
  </div>
</template>
<script setup>
/* imports */
import { ref, computed, onMounted } from 'vue'
import axios from 'axios';

/* When the user refreshes the page, fetch the orders array from the database using the getOrders() function. */
onMounted(()=>{
  if(productStore.orders[0] == undefined){
    productStore.getOrders()
  }
})


/* pinia */
import { useProductStore } from '../../stores/productStore'
const productStore = useProductStore()

const email = ref("abdullahucaak@gmail.com")
const firstName = ref("Abdullah")
const lastName = ref("Uçak")
const shippingAddress = ref("29 Ekim Mah. Kıbrıs Caddesi")
const zipCode = ref("06930")
const city = ref("Ankara")
const country = ref("Turkiye")
const phoneNumber = ref("+90 545 816 87 97")



/* valid email controller */
const isValidEmail = computed (()=>{
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
})

/* Enter a firstName controller */
const isValidFirstName = computed (()=>{
  return firstName.value.length > 0
})
if(firstName.value.length === 0){
  !isValidFirstName
} else {
  isValidFirstName
}

/* Enter a lastName controller */
const isValidLastName = computed (()=>{
  return lastName.value.length > 0
})
if(lastName.value.length === 0){
  !isValidLastName
} else {
  isValidLastName
}

/* Enter a address controller */
const isValidShippingAddress = computed (()=>{
  return shippingAddress.value.length > 0
})
if(shippingAddress.value.length === 0){
  !isValidShippingAddress
} else {
  isValidShippingAddress
}

/* Enter a zip code controller */
const isValidZipCode = computed (()=>{
  return zipCode.value.length > 0
})
if(zipCode.value.length === 0){
  !isValidZipCode
} else {
  isValidZipCode
}

/* Enter a city controller */
const isValidCity = computed (()=>{
  return city.value.length > 0
})
if(city.value.length === 0){
  !isValidCity
} else {
  isValidCity
}

/* Enter a country controller */
const isValidCountry = computed (()=>{
  return country.value.length > 0
})
if(country.value.length === 0){
  !isValidCountry
} else {
  isValidCountry
}

/* Enter a phoneNumber controller */
const isValidPhoneNumber = computed (() => {
  return /^(\+90)?\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}$/.test(phoneNumber.value)

})


/* changing component */
const emit = defineEmits(['complete'])

console.log('after completeForm productStore.orders[0]:', JSON.stringify(productStore.orders[0], null, 2));
const completeForm = () => {
  /* changing component */
  emit('complete')

  /* shipping Info */
  const shippingInfo = ref({
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    shippingAddress: shippingAddress.value,
    country: country.value,
    zipCode: zipCode.value,
    city: city.value,
    phoneNumber: phoneNumber.value
  })
  console.log('after completeForm shippingInfo:', JSON.stringify(shippingInfo.value, null, 2));
  
  /*add shippintInfo to productStore.orders */
  productStore.orders[0].shippingInfo = shippingInfo.value; 
  console.log('after completeForm productStore.orders:', JSON.stringify(productStore.orders, null, 2));

  /* posting to json function */
  const post = async () =>{
        await axios.post("http://localhost:3000/orders", productStore.orders[0])
        .then((result)=>{
            console.log(result)
        })
        .catch((error) => {
            console.error(error);
        });
    }
  /* delete from json and post to json function */
  const deleteAndPost = async () =>{
    await axios.delete(`http://localhost:3000/orders/1`)
    .then(()=>{
        post()
    })
    .catch((error) => {
        console.error(error);
    });
  }

  deleteAndPost()
}

console.log("crypto id: " + crypto.randomUUID())
</script>

<style scoped>
/* FORM CONTENT */
h1, h2{
    font-size: 1.3rem;
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

.fields {
  display: grid;
  grid-gap: 0.5rem;
}
.fields--2 {
  grid-template-columns: 1fr 1fr;
}
.fields--3 {
  grid-template-columns: 1fr 1fr 1fr;
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

.country-code{
  display: inline-block;
  width: 50px;
}
.invalid{
  border: solid 2px rgb(228, 59, 59);
}
.invalid-message{
  color: rgb(228,59,59);
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

</style>