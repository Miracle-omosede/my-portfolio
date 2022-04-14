<template>
    <div id="app" class="overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
</template>

<script>
// import Home from "./views/Home.vue"
// import Preloader from "./components/Preloader.vue"
// import Preloadertest from "./components/Preloadertest.vue"

export default {
  name: "App",
  components : {
  }
}
</script>
<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: burlywood;
}

.route-enter-from{
  opacity: 0;
  transform: translateX(180px);
}
.route-enter-active{
  transition: all 0.3s ease-out;
}

.route-leave-to{
   opacity: 0;
   transform: translateX(-180px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
<style src="./assets/tailwind.css" />
