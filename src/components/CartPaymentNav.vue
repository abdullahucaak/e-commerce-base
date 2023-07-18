<template>
      <div class="inner-navbar">
        <ul>
          <li>
            <RouterLink :to="{name:'cart'}">Cart</RouterLink>
            <span></span>
          </li>
          <li>
            <RouterLink :to="{name:'checkouts'}">Information</RouterLink>
            <span></span>
          </li>
          <li>
            Shipping
            <span></span>
          </li>
          <li>
            Payment
            <span></span>
          </li>
        </ul>
      </div>
</template>

<style scoped>
.main-checkouts .inner-navbar ul{
  width: 62%;
  margin: 30px auto 0;
}
.main-checkouts .inner-navbar ul li{
  display: inline-block;
  padding: 0 10px;
  margin-bottom: 20px;
  font-size: 0.8rem;
}
.main-checkouts .inner-navbar ul li span{
  display: inline-block;
    width: 0.4em;
    height: 0.4em;
    margin-left: 5px;
    margin-bottom: 2px;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(45deg);
    transition: transform 0.3s;
}
.main-checkouts .inner-navbar ul li:last-child span{
display: none;
}
</style>