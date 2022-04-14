<template>
    <div class="footer hidden md:flex">
        <div class="text-gray-600 md:flex md:flex-row md:items-center md:p-10 md:align-center">
            <ul class="md:flex md:items-center text-gray-800" id="contact">
                <li class="md:mx-4" >
                    <a  href="https://drive.google.com/file/d/1nUyM6BIAbEkRkterFJjq-cOr80F37iGz/view?usp=sharing" target="_blank" class="list">download resume</a>
                </li>

                <li class="md:mx-4 " >
                    <router-link to="./Projects">
                    <a href="#" class="list">latest works</a>
                    </router-link>
                </li>

                <li class="md:mx-4 item" id="item">
                    <router-link to="./Projects">
                    <a href="#" class="list">Projects</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer",
    components : {

    }
}
</script>

<style scoped>
.footer {
    font-family: consolas;
    padding: 0 85px;
}

.list {
    font-weight: bold;
    padding-bottom: 2px;
    transition: all .2s ease-in-out;
}


.list:hover {
    color: brown;
    border-bottom: 1px dotted brown;
}
</style>