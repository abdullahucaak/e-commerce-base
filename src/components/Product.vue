<template>
    <RouterLink :to="{name:'product-page', params: { id: product.id } }">
        <div class="bs-item">
            <div class="product-img" :style="{ 'background-image':`url(../../public/images/${product.photo[0]})`}">

            </div>
            <div class="product-img-2" :style="{ 'background-image':`url(../../public/images/${product.photo[1]})`}">

            </div>
            <div class="product-name">
                {{ product.name }}
            </div>
            <div class="product-price">
                ${{ product.price }}
            </div>
        </div>
    </RouterLink>
</template>
<script setup>
const props = defineProps({
    product:{
        type:Object,
        required:false
    }
})
</script>
<style scoped>
.bs-item{
    width: 100%;
    height: auto;
    margin-top: 10px;
}
.product-img, .product-img-2{
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
}
.product-img-2{
    display: none;
}
.bs-item:hover .product-img{
display: none;
}
.bs-item:hover .product-img-2{
display: block;
}
.product-price{
    font-size: 1.05rem;
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 700;
}
</style>