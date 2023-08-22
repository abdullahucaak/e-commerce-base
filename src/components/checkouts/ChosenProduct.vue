<template>
    <div class="cp-img"
    :style="{ 'background-image':`url(../../public/images/${chosenProduct.photo}`}">

    </div>
    <div class="cp-name">
        {{ chosenProduct.name }}
    </div>
    <div class="cp price">
        {{ chosenProduct.totalPrice }}
    </div>
</template>
<script setup>
    const props = defineProps({
        chosenProduct:{
            type: Object,
            required: false
        }
    })
console.log(typeof(props.chosenProduct))
</script>
<style scoped>
.cp-img{
      aspect-ratio: 1/1;
      width: 100%;
      height: auto;
      /* background-image: url(../assets/products/assam-black-600x600.webp); */
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 10px;
}
.cp-name{
  margin-left: 20px;
  text-transform: uppercase;
}
</style>