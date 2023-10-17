<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-inner">
                <img src="../assets/Alaya-Logo_300x300.jpg" alt="Logo">
            </div>
        </div>
        <div class="cards">
            <div class="cards-inner">
                <div class="card left">
                    <div class="card-inner">
                        <div class="c-header">
                            <div class="icon">
                                <i class="fa-regular fa-circle-check"></i>
                            </div>
                            <div >
                                Thank you {{ productStore.orders[0].shippingInfo.firstName }}.
                            </div>
                        </div>
                        <div class="c-informing"> 
                            "Your order has been successfully completed."
                        </div>
                        <div class="c-customer-details">
                            <div class="ccd-header">
                                Details:
                            </div>
                            <div class="customer-email">
                                {{ productStore.orders[0].shippingInfo.email }}
                            </div>
                            <div class="customer-name">
                                <span class="capitalize">{{ productStore.orders[0].shippingInfo.firstName }} </span>  <span class="capitalize">{{ productStore.orders[0].shippingInfo.lastName }} </span>
                            </div>
                            <div class="customer-shipping-address">
                                {{ productStore.orders[0].shippingInfo.shippingAddress }}
                            </div>
                            <div class="customer-city">
                                <span class="capitalize"> {{ productStore.orders[0].shippingInfo.city }} </span> / <span class="capitalize"> {{ productStore.orders[0].shippingInfo.country }} </span>
                                
                            </div>
                            <div class="customer-zip-code">
                                {{ productStore.orders[0].shippingInfo.zipCode }} (Zipcode)
                                
                            </div>
                            <div class="customer-phone-number">
                                {{ productStore.orders[0].shippingInfo.phoneNumber }}

                            </div>
                            <div class="customer-order-code">
                                <h5>
                                    Order Number
                                </h5>
                                <span class="order-unique-code">
                                    {{ productStore.orders[0].orderUniqueCode }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    v-if="productStore.cartProducts.length < 3"
                    class="card right"
                >
                    <div class="card-inner">
                        <div class="c-header">
                            Order Summary
                        </div>
                        <div v-for="chosenProduct in productStore.cartProducts" class="chosen-product">
                            <ChosenProduct :chosenProduct="chosenProduct"/>
                        </div>
                        <div class="total-price-wrapper">
                            <div class="tp-item">Subtotal</div>
                            <div class="tp-item tp-right">
                                $ {{ productStore.orders[0].finalPrice - productStore.orders[0].shippingMethod.price }}
                            </div>
                            <div class="tp-item">Shipping</div>
                            <div class="tp-item tp-right"><small>${{ productStore.orders[0].shippingMethod.price }}</small></div>
                            <div class="tp-item paid">Paid</div>
                            <div class="tp-item tp-right paid">$ {{ productStore.orders[0].finalPrice }}</div>
                        </div>
                    </div>    
                </div>
                <div 
                    v-if="productStore.cartProducts.length > 2"
                    class="card right row-span-4"
                >
                    <div class="card-inner">
                        <div class="c-header">
                            Order Summary
                        </div>
                        <div v-for="chosenProduct in productStore.cartProducts" class="chosen-product">
                            <ChosenProduct :chosenProduct="chosenProduct"/>
                        </div>
                        <div class="total-price-wrapper">
                            <div class="tp-item">Subtotal</div>
                            <div class="tp-item tp-right">
                                $ {{ productStore.orders[0].finalPrice - productStore.orders[0].shippingMethod.price }}
                            </div>
                            <div class="tp-item">Shipping</div>
                            <div class="tp-item tp-right"><small>${{ productStore.orders[0].shippingMethod.price }}</small></div>
                            <div class="tp-item paid">Paid</div>
                            <div class="tp-item tp-right paid">$ {{ productStore.orders[0].finalPrice }}</div>
                        </div>
                    </div>    
                </div>
                <div class="button">
                    <RouterLink :to="{name:'home' }">
                        <button>
                            Continue to Shipping
                        </button>
                    </RouterLink>
                </div>
                <div>

                </div>
                <div class="customer-service">
                    Regarding your order number, you can inquire about your order by calling our customer service number at <bold>'+90 555 395 77 57'</bold>.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
/* components */
import ChosenProduct from '../components/checkouts/ChosenProduct.vue'
/* pinia */
import { useProductStore } from '../stores/productStore';
const productStore = useProductStore()

productStore.getOrders()
productStore.getCartProducts()

</script>

<style scoped>
    body{
        background-color: #F5F5F5;
    }
    .wrapper{
        width: 100%;
    }
    .header-inner{
        padding-left: 80px;
    }
    .header .header-inner img{
        width: 200px;
        height: 147px;
    }
    

    .cards .cards-inner{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: start;
        width: 1539px;
        margin: 0 auto;
    }
    .card{
        width: 95%;
        margin: 0 auto;
        padding: 40px;
        box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.7);
        border-radius: 3px;
        text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
    }
    .left{
        user-select: none;
    }

    .left .card-inner .c-header{
        display: grid;
        grid-template-columns: 1fr 9fr;
        font-size: 30px;
    }
    .left .card-inner .c-header .icon{
        display: inline-block;
    }
    .left .c-informing{
        margin-top: 20px;
    }
    .left .c-customer-details{
        margin-top: 40px;
    }
    .left .c-customer-details div{
        margin-top: 8px;
    }
    .left .c-customer-details div:nth-child(1){
        font-weight: 600;
    }
    .left .c-customer-details div:not(:first-child){
        color: gray;
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
    .left .c-customer-details div:last-child{
        color: #1B9C85;
        font-size: 24px;
        margin-top: 10px;
    }
    .capitalize{
        text-transform: capitalize;
    }

    .row-span-4{
        grid-row: span 4;
    }

    .right .card-inner .c-header{
        font-size: 30px;
    }
    .right .card-inner .chosen-product{
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        align-items: center;
        margin-top: 15px;
    }
    .right .card-inner .chosen-product:last-child{
        border-bottom: 0.5px solid gray;
        padding-bottom: 20px;
    }
    .total-price-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
        border-top: 0.5px solid gray;
    }
    .total-price-wrapper .tp-item{
        margin-top: 10px;
    }
    .total-price-wrapper .tp-item:nth-child(5),
    .total-price-wrapper .tp-item:nth-child(6){
        font-weight: 600;
    }

    .total-price-wrapper .tp-right{
        justify-self: end;
    }
    .total-price-wrapper .tp-right .old-price{
        color: rgb(230, 69, 69);
        text-decoration:line-through;
        font-weight: bold;
        margin-right: 10px;
    }

    .paid{
        color: #1B9C85;
    }

    div.button{
        text-align: center;
    }
    
    button{
        width: 95%;
        background-color: #1c1c1c;
        color: white;
        padding: 30px 20px;
        border-radius: 3px;
        font-size: 14px;
        letter-spacing: 3px;
        transition: 0.3s;
        &:hover{
            background-color: #000;
            transition: 0.3s;
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        }
    }
    .customer-service{
        width: 95%;
        margin: 20px auto 0;
        text-align: justify;
        text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.4);
    }

    @media (max-width:1539px){
        .cards .cards-inner{
            width: 99%;
        }
    }
    @media (max-width:1193px){
        .customer-order-code h5,
        .customer-order-code span{
            font-size: 16px;
        }
    }
    @media (max-width:999px){
        .header-inner{
            padding-left: 80px;
        }
        .cards .cards-inner{
            display: grid;
            grid-template-columns: 1fr;
            width: 80%;
            margin: 0 auto;
        }

        .card{
            margin-bottom: 20px;
        }

        .customer-service{
            font-size: 12px;
            margin-bottom: 20px;
        }
    }
    @media (max-width:780px){
        .header-inner{
            padding-left: 20px;
        }
        .header .header-inner img{
            width: 150px;
            height: 110px;
        }
        .cards .cards-inner{
            display: grid;
            grid-template-columns: 1fr;
            width: 99%;
            margin: 0 auto;
        }

        .card{
            margin-bottom: 20px;
        }

        .customer-service{
            font-size: 12px;
            margin-bottom: 20px;
        }
    }
    @media (max-width:500px){
        .cards-inner{
            width: 100%;
        }
        .card{
            padding: 20px;
            width: 100%;
        }

        .c-header div{
            font-size: 26px;
        }
        .c-informing{
            font-size: 16px;
        }
        .c-customer-details{
            font-size: 12px;
        }
    }

    



</style>