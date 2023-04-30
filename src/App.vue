<template>
  <div id="app">
    <nav class="d-flex flex-column">
      <TopBar class="cursorPointer" />
      <HeaderComp />
      <NavTabs />
    </nav>
    <router-view />
    <LinksComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/header/HeaderComp.vue";
import TopBar from "@/components/header/TopBar.vue";
import NavTabs from "@/components/header/NavTabs.vue";
import FooterComp from "@/components/footer/FooterComp.vue";
import LinksComp from "@/components/footer/LinksComp.vue";
export default {
  components: {
    HeaderComp,
    TopBar,
    FooterComp,
    NavTabs,
    LinksComp,
  },
};
</script>

<style>
#app {
  text-align: center;
}

@import url("@/assets/fonts/fonts.css");
.fontFamilyDancingScript {
  font-family: "DancingScript", sans-serif;
}
.fontFamilyKalam {
  font-family: "Kalam", sans-serif;
}
.fontFamilyCourgette {
  font-family: "Courgette", sans-serif;
}
.fontFamilyCinzel {
  font-family: "Cinzel", sans-serif;
}
.fontFamilyInstrumentSerif {
  font-family: "InstrumentSerif", sans-serif;
}
.fontFamilyGreyQo {
  font-family: "GreyQo", sans-serif;
}
.letterSpacing {
  letter-spacing: 0.08em;
}
.cursorPointer {
  cursor: pointer;
}
</style>
