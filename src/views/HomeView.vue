<template>
  <div class="home">
    <CarouselComp />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CarouselComp from "@/components/firstPage/CarouselComp.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CarouselComp,
  },
};
</script>
