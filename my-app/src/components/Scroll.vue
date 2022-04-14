<template>
    <div class="scroll">
        <router-link to="./About">
            <div class="scroll-down"></div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: 'About',
    components : {

    }
}
</script>

<style scoped>
 /* .scroller {
     transform: rotate(-90deg);
     letter-spacing: 6px;
 } */
.scroll {
    transform: rotate(-90deg);
}

 .scroll::before {
     content: '';
     height: 5px;
     width: 180px;
     background-color: burlywood;
     position: absolute;
     right: -180px;
     margin-left: 6px;
     top: 27px;
 }

  .scroll::after {
     content: '';
     height: 5px;
     width: 280px;
     background-color: burlywood;
     position: absolute;
     left: -280px;
     margin-right: 6px;
     top: 27px;
 }

 .scroll {
     position : absolute;
     right: 0;
     top: 45%;
     margin-right: 40px;
 }

 .scroll-down {
     height: 50px;
     width: 30px;
     border: 2px solid black;
     position: relative;
     border-radius: 50px;
     cursor: pointer;
     margin: 5px 10px;
     transform: rotate(90deg);
 }

 .scroll-down::before,
 .scroll-down::after {
     content: '';
     position: absolute;
     top: 20%;
     left: 50%;
     border: 2px solid black;
     height: 10px;
     width: 10px;
     transform: translate(-50%, -100%) rotate(45deg);
     border-top: transparent;
     border-left: transparent;
     animation: scroll-down 1s ease-in-out infinite;
 }

 .scroll-down::after {
     top: 30%;
     animation-delay: .3s;
 }

 @keyframes scroll-down {
     0%{
         opacity: 1;
     }

     30%{
         opacity: 1;
     }

     60%{
         opacity: 1;
     }

     100%{
         opacity: 0;
         top: 90%;
     }
     
 }
</style>