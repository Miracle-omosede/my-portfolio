<template>
    <div class="flex md:flex-row flex-col w-full h-full md:px-0 px-3"  id="content">
        <div class="flex flex-col justify-center items-left" >
            <h1 class="large-text md:block hidden lowercase">miracle</h1>
        </div>
        <div class="flex flex-col w-full h-screen justify-center md:text-left text-center items-center">
            <div class="absolute bottom-0 right-0 flex md:hidden ml-auto huey opacity-50">
                <img src="../assets/huey-freeman.png">
            </div>
                <div class="description pb-16">
                <div class="tree md:hidden flex items-center justify-center">
                    <img alt="tree" width="90" src="../assets/tree.png" />
                </div>

                <h1 class="md:text-4xl text-6xl font-extrabold">Breathing in the aroma of creativity.</h1>
                
                <p class="md:py-3 py-3 md:px-0 px-3 text-md md:text-lg text-2xl font-semibold md:font-normal font-change ">I'm Miracle - a Frontend Developer based in Nigeria. I enjoy building  for the Web. With every line of code, I strive to make the web a beautiful place</p>

                <!-- <a href="#" class="flex text-lg font-bold md:text-center md:justify-start justify-center text-center uppercase btn">
                    Learn More
                </a> -->
                 <router-link to="./About">
                <button class="cta btn capitalize flex flex-row text-left items-center 
                 justify-start font-bold">
                <span class="tracking-widest">Learn more</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                 <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                </button>
                 </router-link>
            </div>
        </div>

        <div class="absolute hiddden md:flex bg-white justify-center bottom-0">
            <Footer />
        </div>

        <div class="md:hidden flex">
            <Navbtn />
        </div>

        <div class="absolute md:hidden flex flex-row bg-white right-0 bottom-0 mr-5 mb-5 py-4 px-4 rounded-full shadow-lg">
            <a href="mailto:miracleigbinoghene@gmail.com" target="_blank">
            <span class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10"  viewBox="0 0 20 20" fill="currentColor">
                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            </span>
            </a>
        </div>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import Navbtn from './Navbtn.vue'

export default {
    name: "Content",
    components : {
        Footer,
        Navbtn
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

    #content {
        background-color: wheat;
        background-color: #f5deb3;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23deb887' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    .large-text{
        font-size: 8rem;
        font-family: 'Rubik Moonrocks', cursive;
        /* font-weight: bold; */
    }

    .description {
        width: 440px;
        z-index: 10;
        font-family: 'Nunito Sans', sans-serif;
    }

    .btn {
        letter-spacing: 6px;
    }

.cta {
 position: relative;
 margin: auto;
 padding: 12px 18px;
 transition: all 0.2s ease;
 border: none;
 background: none;
}

.cta:before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 display: block;
 border-radius: 50px;
 background: wheat;
 width: 45px;
 height: 45px;
 transition: all 0.3s ease;
}

.cta span {
 position: relative;
 font-family: "Ubuntu", sans-serif;
 font-size: 18px;
 font-weight: 700;
 /* letter-spacing: 0.05em; */
 color: #333;
}

.cta svg {
 position: relative;
 top: 0;
 margin-left: 10px;
 fill: none;
 stroke-linecap: round;
 stroke-linejoin: round;
 stroke: #333;
 stroke-width: 2;
 transform: translateX(-5px);
 transition: all 0.3s ease;
}

.cta:hover:before {
 width: 100%;
 background: wheat;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active {
 transform: scale(0.95);
}

.iconText {
    font-family: consolas;
}

@media only screen and (min-width: 468px) {
    /* .font-change {
        font-family: consolas;
        font-weight: 800;
        letter-spacing: 2px;
    } */
}
</style>