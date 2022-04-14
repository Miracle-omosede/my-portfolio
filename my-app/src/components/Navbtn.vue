<template>
    <div class="navbtn w-full justify-center items-center flex">
        <router-link to="../views/Sidenav">
        <!-- <div class="scroll">
            <div class="scroll-down"></div>
        </div> -->
        
        </router-link>
    </div>
</template>
<script>
export default{

}
</script>

<style scoped>
.scroll {
    transform: rotate(180deg);
}
 .scroll {
     position : absolute;
     bottom: 0;
 }

 .scroll-down {
     height: 50px;
     width: 30px;
     border: 2px solid rgb(73, 53, 17);
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
     border: 2px solid rgb(73, 53, 17);
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