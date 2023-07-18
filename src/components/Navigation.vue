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
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  </div>
</template>
<style scoped>
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
  }
  .announce-nav-container nav{
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    align-items: center;
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
    padding: 0 10px ;
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
  }
  @media (min-width: 700px){
    .announce-nav-container nav .shop-search .fa-bars{
      display: none;
    }
  }
</style>