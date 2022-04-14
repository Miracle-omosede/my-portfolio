<template>
    <div id="home-container" class="md:px-32 md:py-5 w-full h-screen overflow-hidden">
        <Navbar />
        <Content />
        <Scroll class="md:block hidden" />
    </div>
</template>

<script>
import Scroll from '../components/Scroll.vue'
import Navbar from '../components/Navbar.vue'
import Content from '../components/Content.vue'

export default {
    name : "Home",
    components : {
        Navbar,
        Content, 
        Scroll
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #home-container {
        width: 100vw;
        height: 100vh;
        background-color: #ddd;
    }

    #about {
        z-index: 20px;
    }
</style>