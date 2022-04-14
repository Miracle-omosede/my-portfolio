<template>
        <div class=" flex bg-darker w-full h-screen">
        <div class="w-1/5 h-screen flex flex-col justify-center items-center border-r border-lighter pt-28">
        <div class=""> 
                        <ul class="px-3 py-4 flex flex-col">
                            <li class=" text-xl my-4"><a href="https://github.com/miracle-omosede" target="_blank" class="hover:text-lighter transition">
                                <fa :icon="['fab', 'github']" class="text-3xl"/>    
                            </a></li>
                            <li class=" text-xl my-4 "><a href="https://twitter.com/Miracle_omosede" target="_blank" class="hover:text-lighter transition">
                                <fa :icon="['fab', 'twitter']" 
                                class="text-3xl"/>    
                            </a></li>
                            <li class=" text-xl my-4"><a href="https://www.linkedin.com/in/miracle-igbinoghene-0860a6219" target="_blank"  class="hover:text-lighter transition">
                                <fa :icon="['fab', 'linkedin']"  class="text-3xl"/>
                            </a></li>
                        </ul>
        </div>

        <div class="cursor-pointer mb-6 mt-auto">
            <router-link to="./">
                <fa :icon="['fas', 'times']"  class="text-3xl rotor"/>
            </router-link>
        </div>
        

        </div>

        <div class="flex flex-col items-start pt-20 w-full pl-5">
                <button  v-for="tab in tabs" :key="tab.id" class="flex flex-row cta uppercase font-semibold text-4xl my-4">
                    <router-link :to="`${tab.link}`">
                    <span class="hover-underline-animation">  {{tab.title}} </span>
                     </router-link>
                </button>
            <a href="https://drive.google.com/file/d/1nUyM6BIAbEkRkterFJjq-cOr80F37iGz/view?usp=sharing" target="_blank" class="uppercase font-semibold tracking-widest text-xl my-9 bg-black px-7 py-4 text-lighter rounded-full text-center hover:bg-lighter hover:text-black transition">
                <span>Download Resume</span>
            </a>
        </div>

        <div class="absolute right-0 bottom-0">
            <img src="../assets/riley-freeman.png" class="opacity-60" alt="huey-freeman">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidenav',
    components: {

    },
    data() {
        return{
            tabs: [
                {title: 'Home.', id:'home', link: './'},
                {title: 'About.', id:'about', link:'../views/About'},
                {title: 'Blogs.', id:'blogs', link: '../views/Blogs'},
                {title: 'Projects.', id:'projects', link: '../views/Projects'},
            ],
            socials : [
                {icon: 'fab fa-linkedin', id:'github'},
                {icon: 'fab fa-linkedin', id: 'twitter'},
                {icon: 'fab fa-linkedin', id: 'linkedin'},
            ],
        }
    },
}
</script>

<style scoped>
.sidebar {
    animation: slider;
    animation-duration: .2s;
    animation-delay: .4s
}

@keyframes slider {
    0%{
        transform: translateX(100%);
    }

    20%{
        transform: translateX(50%);
    }
    50%{
        transform: translateX(40%);
    }
    75%{
        transform: translateX(20%);
    }
    100%{
        transform: translateX(-80%);
    }
}

.rotor{
    transition-duration: .3s;
}

.rotor:hover {
    transform: rotate(90deg);
}

.cta {
 border: none;
 background: none;
}

.cta span {
 padding-bottom: 7px;
 letter-spacing: 4px;
 padding-right: 15px;
 text-transform: uppercase;
}

.cta svg {
 transform: translateX(-8px);
 transition: all 0.3s ease;
}

.cta:hover svg {
 transform: translateX(0);
}

.cta:active svg {
 transform: scale(0.9);
}

.hover-underline-animation {
 position: relative;
 color: black;
 padding-bottom: 20px;
}

.hover-underline-animation:after {
 content: "";
 position: absolute;
 width: 100%;
 transform: scaleX(0);
 height: 1.5px;
 bottom: 0;
 left: 0;
 background-color: #000000;
 transform-origin: bottom right;
 transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
 transform: scaleX(1);
 transform-origin: bottom left;
}


.list-enter-from {
    opacity: 0;
    transform: scale(0.6);
}
.list-enter-to {
    opacity: 1;
    transform: scale(1)
}
.list-enter-active {
    transition: all 4s ease;
}
</style>