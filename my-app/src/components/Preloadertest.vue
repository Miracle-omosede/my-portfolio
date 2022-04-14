<template>
    <div class="pageloader flex flex-row items-center justify-center">
        <h2>Loading...</h2>
    </div>
</template>

<script>
export default {
    name: 'Preloadertest',
    contents : {

    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .pageloader {
        width: 100vh;
        height: 100vh;
        position: absolute;
        background: white;
        z-index: 9999;
    }

</style>