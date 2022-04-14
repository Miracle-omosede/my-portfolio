<template>
<div class="w-full h-screen justify-center flex  flex-col items-center bg-white">
    <img src="../assets/creative-writing.svg" alt="creative-writing" width="390">
    <div class="loader">
    <h2 class="font-bold uppercase">No Blog Post Yet</h2>
    </div>
         <router-link to="./">
    <button class="mt-5 py-4 px-5 shadow-md bg-gray-100 rounded-full">
            <fa :icon="['fas','arrow-left']"/>
    </button>
            </router-link>
</div>
</template>
<style scoped>
.loader {
    -webkit-box-reflect: below -27px linear-gradient( transparent, #0003);
}

h2{
    font-size: 2em;
    color: #E58A2A;
}

 /* .loader {
            position: relative;
            -webkit-box-reflect: below -27px linear-gradient( transparent, #0003);
        }

        .loader::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 2px;
            height: 100%;
            background: #333;
            animation: blinkCursor 0.8s steps(3) infinite;
        }

        .loader, h2 {
            position: relative;
            color: #333;
            letter-spacing: 5px;
            font-size: 2em;
            animation: typing 8s steps(16) infinite;
            overflow: hidden;
        }

        @keyframes blinkCursor {
            0%,75% {
                opacity: 1;
            }
            76%,100% {
                opacity: 0;
            }
        }

        @keyframes typing {
            0%, 90%, 100%{
                width: 0;
            }

            30%, 60%{
                width: 375.22px;
            }
        } */
</style>
<script>
export default {
    name: 'Blogs',
    components: {

    },
}
</script>