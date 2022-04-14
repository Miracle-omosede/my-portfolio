<template>
    <div class="md:flex md:justify-between flex flex-row justify-between items-center" id="nav">
        <div class="text-gray-600 flex flex-col items-start md:items-left md:py-2 px-4 align-center">
            <h1 class="font-bold text-5xl logo-name text-black">miracle.</h1>
            <p class="job-title">frontend developer</p>
        </div>

        <router-link to="../views/Sidenav" class="block md:hidden">
        <div class="flex md:hidden mr-4 py-4 px-4 rounded-full bg-darker shadow-lg">
            
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>           
        </div>
        </router-link> 

        <div class="text-gray-600 md:flex hidden flex-row items-center justify-center">            
            <div class="absolute flex" id="dark-bg">
            <div class="relative flex md:flex-row flex-row items-center align-center justify-center mx-auto" id="contact">
            <ul class="md:flex md:flex-row md:mx-auto md:items-center md:align-center md:justify-center font-bold text-gray-800" id="contact">
                <li class="md:mx-4 tool rounded-full px-5 py-4 social-item" id="contact">
                    <a href="https://github.com/miracle-omosede" target="_blank" style="font-family: consolas">gh</a>
                    <span class="label tool-tip md:justify-center hidden md:absolute md:left-0 mt-5 p-2 bg-gray-200 rounded-lg">
                        <span class="flex justify-center items-center">
                            <fa :icon="['fab', 'github']" />
                        </span>
                        <span class="flex items-center justify-center px-2 text-bold text-gray-800 text-sm">Github</span>
                    </span>
                </li>
                <li class="md:mx-4 tool rounded-full px-5 py-4 social-item" id="contact" >
                    <a href="https://twitter.com/Miracle_omosede" target="_blank" style="font-family: consolas">tw</a>
                    <span class="label hidden tool-tip justify-center absolute mt-5 md:right-4 mr-4 p-2 bg-blue-200 rounded-lg">
                        <span class="flex justify-center items-center">
                            <fa :icon="['fab', 'twitter']" />
                        </span>
                        <span class="flex items-center justify-center px-2 text-bold text-blue-800 text-sm">Twitter</span>
                    </span>
                </li>
                <li class="md:mx-4 tool rounded-full px-5 py-4 social-item" id="contact">
                    <a href="https://www.linkedin.com/in/miracle-igbinoghene-0860a6219" target="_blank" style="font-family: consolas">in</a>
                    <span class="label tool-tip hidden justify-center items-center absolute ml-3 mt-5 p-2 bg-gray-800 rounded-lg">
                        <span class="flex justify-center items-center text-white mr-1">
                            <fa :icon="['fab', 'linkedin']" />
                        </span>
                        <span class="text-bold text-gray-400 text-sm">Linkedin</span>
                    </span>
                </li>
            </ul>
            </div>
                <img src="../assets/huey-freeman.png" id="user-img" class="md:block"  alt="huey">
            </div>
        </div>

        <div class="text-gray-600 md:flex hidden flex-row items-center align-center">
            <ul class="md:flex md:items-center text-gray-800" id="contact">
                <router-link to="./Blogs">
                <li class="md:mx-4" >
                    <a href="#" class="list">Blogs</a>
  
                </li>
                </router-link>
                <li class="md:mx-4">
                    <a href="mailto:miracleigbinoghene@gmail.com" target="_blank" class="list">Send Mails</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap');

    #dark-bg {
        background: burlywood;
        width: 400px;
        height: 900px;
    }

    .list {
        letter-spacing: 3px;
    }

    #contact {
        z-index: 10;
    }

    .job-title {
        letter-spacing: 3px;
    }

     #user-img {
        position: absolute;
        bottom: -19px;
        right: 190px;
    }


    .tool-tip {
        display: none;
        transition: all ease-in-out .6s;
    }

    .tool:hover .tool-tip {
        display: flex;
    }

    .social-item{
        cursor: pointer;
        transition: all ease-in-out .3s;
    }

    .social-item:hover {
        background: wheat;
    }
</style>

<script>

export default {
    name: "Navbar",
    components : {
    },
    setup() {
        let Links = [
            {name: "Latest works", link : "#"},
            {name: "Blogs", link : "#"},
            {name: "Send Mail", link : "#"},
        ]

        return{Links}
    }
}
</script>