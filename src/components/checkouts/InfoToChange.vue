<template>
    <div class="information-to-change">
        <div class="itc-inner">
            <div class="itc-grid contact">
                <div>Contact</div>
                <div>abdullahucaak@gmail.com</div>
                <div>Change</div>
            </div>
            <div class="itc-grid ship-to">
                <div>Ship to</div>
                <div>Eryaman mah. 1.meşrutiyet cad. Atakent-1 88/22 Etimesgut/Ankara</div>
                <div>Change</div>
            </div>
            <div class="itc-grid payment">
                <div>Method</div>
                <div>First Class Package - $4.44</div>
                <div>Change</div>
            </div>
        </div>
    </div>
</template>
<style scoped>

form .information-to-change{
    border: solid 0.5px black;
    border-radius: 10px;
    margin-bottom: 30px;
}
form .itc-inner{
    margin: 10px;
    padding: 10px;
}
form .itc-inner .itc-grid{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    font-size: 0.8rem;
    border-bottom: solid black 0.5px;
    padding: 20px 0;
}
form .itc-inner .itc-grid:last-child{
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    font-size: 0.8rem;
    border-bottom: none;
    padding: 20px 0 0 0;
}
form .itc-inner .contact{
    padding: 0 0 20px 0;
}

form .itc-inner .itc-grid div:nth-child(2){
    font-weight: 500;
    font-size: 0.9rem;
} 
form .itc-inner .itc-grid div:last-child{
    text-decoration: underline;
}
</style>