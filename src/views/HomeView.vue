<template>
  <div class="home">
    <CarouselComp />
    <BarComp />
    <SecondPart />
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselComp from "@/components/firstPage/CarouselComp.vue";
import BarComp from "@/components/firstPage/BarComp.vue";
import SecondPart from "@/components/firstPage/SecondPart.vue";

export default {
  name: "HomeView",
  components: {
    CarouselComp,
    BarComp,
    SecondPart,
  },
};
</script>
