<template>
  <div class="announce-nav-container">
    <div class="announce-bar">
      <span> Free Shipping Until 5/14! No code Needed</span>
    </div>
    <nav>
      <div class="logo">
        <img src="../assets/Alaya-Logo_300x300.jpg" alt="Logo">
      </div>
      <div class="main-nav">
        <ul>
          <li>
            <RouterLink class="nav-item" :to="{name:'home'}">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="nav-item" :to="{name:'shop'}">Shop <span class="dropdown-icon"></span></RouterLink>
          </li>
          <li>
            <RouterLink class="nav-item" :to="{name:'about-us'}">About Us</RouterLink>
          </li>
        </ul>
      </div>
      <div class="shop-search">
        <i class="fa fa-light fa-search"></i>
        <RouterLink :to="{name:'cart'}">
          <i class="fa fa-cart-shopping"></i>
        </RouterLink>
        <i @click="openBars" v-if="!isBarsOpen" class="fa-solid fa-bars"></i>
        <i @click="hideToBars" v-if="isBarsOpen" class="fa-solid fa-xmark"></i>
      </div>
    </nav>
    <div 
      v-if="isBarsOpen" 
      class="bars"
      :class="{'slide-in': isAnimationWorked, 'slide-out': !isAnimationWorked}"
    >
      <div>
        <ul>
          <li>
            <RouterLink :to="{name:'home'}">Home</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'shop'}">Shop <span class="dropdown-icon"></span></RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'about-us'}">About Us</RouterLink>
          </li>
        </ul>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


  const isBarsOpen = ref(false)
  const isAnimationWorked = ref(false)


/* open to vertical bars */
  const openBars = () =>{
    isBarsOpen.value = true
    isAnimationWorked.value = true

  }
  /* hide to vertical bars */
  const hideToBars = () =>{
    setTimeout(() => {             
      isBarsOpen.value = false
    }, 100);                    /* code works 0.3 second after */
    isAnimationWorked.value = false
    
}
/* "If the page is above 700 pixels, do not display the vertical navbar." */
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        isBarsOpen.value = false;
    }
});



</script>
<style scoped>
  body{
    z-index: 0;
  }
  .announce-nav-container{
    display: grid;
    grid-template-rows: 46px 147px;
    border-bottom: solid rgba(0,0,0, 0.2) 0.5px;
  }
  .announce-nav-container .announce-bar{
    background-color: #4C4C6D;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 46px;
    color: whitesmoke;
    z-index: +2;
  }
  .announce-nav-container nav{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    align-items: center;
    background-color: white;
    z-index: +2;
  }
/* nav-inner */
  .announce-nav-container nav .logo > img{
    width: 200px;
    height: 147px;
  }
  .announce-nav-container nav .main-nav{
    width: 100%;
  }
  .announce-nav-container nav .main-nav ul{
    list-style-type:none ;
    text-align: center;
  }
  .announce-nav-container nav .main-nav ul li{
    display: inline-block;
    cursor: pointer;
  }
  .announce-nav-container nav .main-nav ul li .dropdown-icon {
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    margin-left: 5px;
    margin-bottom: 3px;
    border-top: 1px solid;
    border-right: 1px solid;
    transform: rotate(135deg);
    transition: transform 0.3s;
  }
  .announce-nav-container nav .shop-search i {
    padding: 0 8px ;
    font-size: 1.1rem;
  }


  /* Nav Responsive */
  @media (max-width: 700px){
    .announce-nav-container nav{
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      align-items: center;
    }
    .announce-nav-container nav .logo{
      justify-self: start;
    }
    .announce-nav-container nav .shop-search{
      justify-self: end;
      margin-right: 2rem;
    }
    .announce-nav-container nav .main-nav{
      display: none;
    }
    .bars li{
      padding: 20px 20px;
      font-size: 14px;
      font-weight: 500;
      border-bottom: 0.5px solid rgba(0,0,0, 0.2);
      user-select: none;
    }
    .bars li:first-child{
      border-top: 0.5px solid rgba(0,0,0, 0.2);
    }
    .bars li:last-child{
      border-bottom: none;
    }
    @keyframes slide-in {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }
    .slide-in{
        animation: slide-in 0.3s ease;
        z-index: +1;
      }
      .slide-out{
        animation: slide-out 0.3s ease;
        z-index: +1;
    }
  }
  @media (min-width: 700px){
    .announce-nav-container nav .shop-search .fa-bars, .fa-xmark{
      display: none;
    }
  }
</style>