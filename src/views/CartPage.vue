<template>
    <Navigation/>
    <div class="main">
        <div v-if="productStore.cartProductsLS.length === 0" class="main-inner-cart-empty">
            <div class="mice-inner">
                <h1>Your Cart</h1>
                <div>Your Cart is Currently Empty</div>
                <RouterLink :to="{name:'shop'}"><button> CONTINUE SHOPPING </button></RouterLink>
            </div>
        </div>
        <div v-else class="main-inner">
            <div class="cart-header">
                <h1>Your Cart</h1>
                <RouterLink class="continue-shopping" :to="{name:'shop'}">Continue Shopping</RouterLink>
            </div>
            <form @submit="postOrders">
                <table class="cart-table">
                    <thead class="t-heading">
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody v-for=" cartProduct in productStore.cartProductsLS" :key="cartProduct.id">
                        <div v-if="productStore.loading">Loading tasks...</div>
                        <CartProduct :cartProduct="cartProduct"/>
                    </tbody>
                </table>
                <div class="cart-footer">
                    <div class="cart-footer-inner">
                        <div class="f-left">
                            <label style="display: block; margin-bottom: 20px; font-weight: 300;" for="">Add a note to your order</label>
                            <textarea name="userNote" v-model="userNote" cols="40" rows="3"></textarea>
                        </div>
                        <div class="f-right">
                            <div class="f-right-inner">
                                <div class="cart-sub-total-wrapper">
                                    <div class="cart-sub-total">
                                        <span class="subtotal">Subtotal</span>
                                        <span class="subtotal">${{ (productStore.calculateSubtotal).toFixed(2) }} USD</span>
                                    </div>
                                    <div class="cart-shipping-message">
                                        Taxes and shipping calculated at checkout
                                    </div>
                                </div>
                                <div class="cart-buttons-container">
                                    <div class="submit-control">
                                        <input type="submit" name="checkout" value="Check Out">
                                    </div>
                                    <div class="additional-checkout-buttons">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="how-did-you-hear">
                    <div class="head">How did you hear about us?</div>
                    <div class="options">
                        <select v-model="howDidYouHear">
                            <option>Please Make a Selection</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Google">Google</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Friend">Friend</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
/* components */
import Footer from '../components/Footer.vue'
import Navigation from '../components/Navigation.vue'
import CartProduct from '../components/CartProduct.vue';
/* import router */
import router from '../router'

/* pinia */
import { useProductStore } from '../stores/productStore'
const productStore = useProductStore()
/* import axios */
import axios from 'axios';

/* getCompletedOrders with JSON */
productStore.getCompletedOrders()

onMounted(()=>{
 const storedCartProducts = localStorage.getItem('cartProducts')
    if(storedCartProducts){
        productStore.cartProductsLS = JSON.parse(storedCartProducts)
    }
    console.log("productStore.cartProductsLS: " + JSON.stringify(productStore.cartProductsLS))
})

const userNote = ref("")
const howDidYouHear = ref("Please Make a Selection")

/* submit cart */
const postOrders = (e) =>{
    let newId;

    if (productStore.completedOrders.length === 0) {
        /* if completedOrders array is empty, assign newId to 1 */
        newId = 1;
    } else {
        // If there is an order in the completedOrders array, find the largest id value of the orders in the array and create the next id value.
        newId = Math.max(...productStore.completedOrders.map(item => item.id)) + 1;
    }
    productStore.newId = newId
    console.log("productStore'daki new Id: " + productStore.newId)

    const newOrder = reactive({
        id:newId,
        userNote: userNote.value,
        howDidYouHear: howDidYouHear.value,
        cartProducts: productStore.cartProductsLS,
    })
    
    
    /* posting to local storage function */
    const post = async () =>{
        localStorage.setItem('order', JSON.stringify(newOrder))
        productStore.order = newOrder
    }
    /* delete from local storage and post to local storage new object*/
    const deleteAndPost = async () =>{
        localStorage.removeItem('order')
        productStore.order = null /* We deleted an element starting from index zero. */
        post()
    }
    
    deleteAndPost()
    /* routing */
    router.push({ name: 'checkouts' })
    
    e.preventDefault()
    
}
</script>
<style scoped>
.main{
    display: grid;
}
.main .main-inner-cart-empty{
    margin: 100px auto;
    width: 60%;
    text-align: center;
}
.main .main-inner-cart-empty .mice-inner{
    padding: 100px 0;
}
.main .main-inner-cart-empty .mice-inner div{
    margin-top: 20px;
    letter-spacing: 1px;
}
.main .main-inner-cart-empty .mice-inner button{
    background-color: white;
    color: #1b9c85;
    border: 1px solid #1b9c85;
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 15px 35px;
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.5s;
}
.main .main-inner-cart-empty .mice-inner button:hover{
    background-color: #1b9c85;
    color: whitesmoke;
    font-size: 0.8rem;
    letter-spacing: 0.1px;
    padding: 15px 55px;
    border-radius: 5px;
    margin-top: 20px;
    transition: 0.5s;
}
.main .main-inner{
    width: 1197px;
    margin: 50px auto 0;
    padding: 20px;
}
.main .main-inner .cart-header{
    text-align: center;
}
.main .main-inner .cart-header h1{
    margin-bottom: 20px;
    font-weight: 400;
}
.main .main-inner .cart-header a{
    color: #535e6f;
    text-decoration: underline;
}
.main .main-inner .cart-header a:hover{
    color: #1b9c85;
}
.main .main-inner form .cart-table{
    border-collapse: collapse;
    margin: 25px 0;
    width: 100%;
    text-align: left;
}
.main .main-inner form .cart-table thead tr th,
.main .main-inner form .cart-table tbody tr td{
    padding: 12px 15px;
    border-bottom: solid 0.5px rgb(184, 184, 184);
    font-size: 1.05em;
    font-weight: 400;
}
.main .main-inner form .cart-table tbody tr td{
    padding: 30px 15px;
}
.main .main-inner form .cart-table tbody tr .cart-product-information{
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
}
.main .main-inner form .cart-table tbody tr .cart-product-information .cart-product-img{
    aspect-ratio: 1/1;
    width: 100px;
    height: auto;
    /* background-image: url(../assets/products/assam-black-600x600.webp); */
    background-size: contain;
    background-repeat: no-repeat;
}
.main .main-inner form .cart-table tbody tr .cart-product-information .cart-product-name-wrapper .remove{
    margin-top: 5px;
    color: rgb(203, 116, 107);
    text-decoration: underline;
}
.main .main-inner form .cart-table tbody tr .cart-quantity .cart-quantity-input{
    width: 100px;
    padding: 20px 10px;
    border: solid 0.5px #1b2430;
    font-size: 1.1rem;
}
.main .main-inner form .cart-table tbody tr .cart-quantity .q-input-smart-phone{
    display: none;
}

.main .main-inner form .cart-footer .cart-footer-inner{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-left textarea{
    border: 0.5px solid black;
    border-radius: 3px;
    font-size: 1rem;
    letter-spacing: 1.2px;
    font-weight: 300;
    padding: 10px;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-left textarea:focus{
    border: 0.5px solid #1b9c85;
    border-width: 1.5px;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right{
    justify-self: end;
    width: 100%;
    display: grid;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner{
    justify-self: end;
    display: grid;
}

.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper{
    justify-self: end;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper .cart-sub-total{
    margin: 0 0 20px 60px;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper .cart-sub-total span:nth-child(2){
    padding-left: 75px;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper .cart-shipping-message{
    margin-bottom: 50px;
    font-size: 0.9em;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control{
    display: grid;
    justify-content: end;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control input{
    padding: 10px 30px;
    background-color: #1b9c85;
    color: white;
    font-size: 1em;
    border-radius: 3px;
    transition: 0.4s;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control input:hover{
    padding: 10px 45px;
    transition: 0.4s;
}
.main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .additional-checkout-buttons ul li.icons{
    display: inline-block;
    padding: 20px 10px;
    color: #1b2430;
    font-size: 1.5rem;
}

.main .main-inner .how-did-you-hear {
    margin-bottom: 50px;
}
.main .main-inner .how-did-you-hear .head {
    color: rgba(27, 26, 26, 0.7);
    font-weight: 700;
}
.main .main-inner .how-did-you-hear .options select{
    background-color: none;
    color: rgba(27, 26, 26, 0.9);
    border: solid 0.5px black;
    margin-top: 10px;
    padding: 10px 20px;
    width: 100%;
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1.1px;
}
.main .main-inner .how-did-you-hear .options select:focus{
    border: solid 0.5px #1b9c85;
    border-width: 1.5px;
}
.subtotal{
    font-weight: 600;
}

@media (max-width: 1200px){
    .main .main-inner{
        width: 95%;
    }
}
@media (max-width: 867px) {
    .main .main-inner form .cart-table tbody tr{
    height: auto;
    }
    .main .main-inner form .cart-table tbody tr td{
        font-size: 0.9rem;
    }
    .main .main-inner form .cart-table tbody tr .cart-product-information .cart-product-img{
        aspect-ratio: 1/1;
        width: 95%;
        height: auto;
        background-image: url(../assets/products/assam-black-600x600.webp);
        background-size: contain;
        background-repeat: no-repeat;
    }
    .main .main-inner form .cart-table tbody tr td:nth-child(2),
    .main .main-inner form .cart-table tbody tr td:nth-child(3),
    .main .main-inner form .cart-table thead th:nth-child(2),
    .main .main-inner form .cart-table thead th:nth-child(3)
    {
        display: none;
    }
    .main .main-inner form .cart-table tbody tr .cart-quantity .q-input-smart-phone{
        display: block;
        margin-top: 5px;
        width: 75px;
        padding: 5px 10px;
        font-size: 0.9rem;
    }

    .main .main-inner form .cart-footer .cart-footer-inner{
        display: grid;
        grid-template-columns: 1fr;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-left{
        margin-bottom: 20px;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-left textarea{
        width: 100%;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner{
        justify-self: center;
        display: grid;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper{
        justify-self: center;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper .cart-sub-total{
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0 0 20px 25px;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-sub-total-wrapper .cart-shipping-message{
        margin-bottom: 20px;
        font-size: 0.9em;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control{
        display: grid;
        justify-content: center;
        margin-bottom: 20px;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control input{
        padding: 10px 100px;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .submit-control input:hover{
        padding: 10px 100px;
        background-color: white;
        color: #1b9c85;
        border: #1b9c85 0.5px solid;
    }
    .main .main-inner form .cart-footer .cart-footer-inner .f-right .f-right-inner .cart-buttons-container .additional-checkout-buttons ul li.icons{
        display: inline-block;
        padding: 20px 10px;
        color: #1b2430;
        font-size: 1rem;
    }
}
@media (max-width:340px){
    .main .main-inner{
        width: 100%;
        padding: 5px;
    }
    .main .main-inner form .cart-table{
        border-collapse: collapse;
        margin: 25px 0;
        width: 100%;
        text-align: left;
    }
    .main .main-inner form .cart-table tbody tr .cart-product-information .cart-product-img{
        aspect-ratio: 1/1;
        width: 50px;
        height: auto;
        /* background-image: url(../assets/products/assam-black-600x600.webp); */
        background-size: contain;
        background-repeat: no-repeat;
    }
    .main .main-inner form .cart-table tbody tr td{
        font-size: 0.7rem;
    }

}

</style>