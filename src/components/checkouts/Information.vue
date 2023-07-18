<template>
  <div class="form-container">
    <form class="form">
        <h1>Contact</h1>
        <div class="fields">
            <label class="field">
            <span class="field__label" for="Email">Email</span>
            <input class="field__input" type="text" id="firstname" value="John" autofocus />
            </label>
        </div>

        <h2>Shipping address</h2>
        <p>Please enter your shipping details.</p>
        <div class="fields fields--2">
            <label class="field">
            <span class="field__label" for="firstname">First name</span>
            <input class="field__input" type="text" id="firstname" value="John" />
            </label>
            <label class="field">
            <span class="field__label" for="lastname">Last name</span>
            <input class="field__input" type="text" id="lastname" value="Doe" />
            </label>
        </div>
        <label class="field">
            <span class="field__label" for="address">Address</span>
            <input class="field__input" type="text" id="address" />
        </label>
        <label class="field">
            <span class="field__label" for="country">Country</span>
            <select class="field__input" id="country">
            <option value=""></option>
            <option value="unitedstates">United States</option>
            </select>
        </label>
        <div class="fields fields--3">
            <label class="field">
            <span class="field__label" for="zipcode">Zip code</span>
            <input class="field__input" type="text" id="zipcode" />
            </label>
            <label class="field">
            <span class="field__label" for="city">City</span>
            <input class="field__input" type="text" id="city" />
            </label>
            <label class="field">
            <span class="field__label" for="state">State</span>
            <select class="field__input" id="state">
                <option value=""></option>
            </select>
            </label>
        </div>
        <label class="field">
        <span class="field__label" for="phone-number">Phone Number</span>
        <input class="field__input" type="tel" id="phone-number" value="" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
        </label>
        <div class="form-footer">
            <div class="return-to-cart">
                <span class="back-icon"></span>
                <RouterLink :to="{name:'cart'}"> Return to cart</RouterLink>
            </div>
            <div class="submit-button">
                <input @click="completeForm" class="button" type="submit" value="Continue to Shipping">
            </div>
        </div>
    </form>
  </div>
</template>
<script setup>
const emit = defineEmits(['complete'])
const completeForm = () => {
  emit('complete')
}
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