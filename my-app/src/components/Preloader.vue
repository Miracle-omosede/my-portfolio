<template>
    <div class="page-wrapper" v-if="!isloaded"> 
        <div class="loader">
            <h1>Loading...</h1>
        </div>
    </div>
</template>

 <style scoped>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: consolas;
        }

        .page-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: burlywood;
            z-index: 999;
        }

        .loader {
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
            animation: typing 8s steps(10) infinite;
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
                width: 401.88px;
            }
        }
    </style>

<script>
export default {
    name: 'Preloader',
    data: () => {
        return {
            isloaded : false
        }
    },
    mounted(){
        document.onreadystatechange = () => {
            if(document.readyState == "complete") {
                this.isloaded = true;
            } 
        }
        
    }
}
</script>