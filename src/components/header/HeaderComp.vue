<template>
  <div class="d-flex flex-column flex-lg-row container-fluid">
    <SearchBar class="col-12 col-lg-3 order-lg-1 order-2" />
    <LogoComp class="col-12 col-lg-6 order-lg-2 order-1" />
    <MenuBar class="col-12 col-lg-3 order-lg-3 order-3" />
  </div>
</template>

<script>
import LogoComp from "@/components/header/LogoComp.vue";
import MenuBar from "@/components/header/MenuBar.vue";
import SearchBar from "@/components/header/SearchBar.vue";
export default {
  components: {
    LogoComp,
    MenuBar,
    SearchBar,
  },
};
</script>

<style></style>
