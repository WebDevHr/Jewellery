<template>
  <div id="app">
    <nav class="d-flex flex-column">
      <TopBar class="cursorPointer" />
      <HeaderComp />
      <NavTabs />
    </nav>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
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
.fontFamilyAbrilFatface {
  font-family: "AbrilFatface", sans-serif;
}
.fontFamilyCormorantGaramound {
  font-family: "CormorantGaramound", sans-serif;
}
.fontFamilyLato {
  font-family: "Lato", sans-serif;
}
.fontFamilyMontserrat-VariableFont_wght {
  font-family: "Montserrat-VariableFont_wght", sans-serif;
}
.fontFamilyPlayfairDisplay {
  font-family: "PlayfairDisplay", sans-serif;
}
.fontFamilyLora {
  font-family: "Lora", sans-serif;
}

.letterSpacing {
  letter-spacing: 0.08em;
}
.cursorPointer {
  cursor: pointer;
}
h1,
h2,
h3,
h4 {
  font-family: "Cinzel", sans-serif;
  font-weight: bolder;
}

p {
  font-family: "Lora", sans-serif;
  font-size: 14px;
}

/** Transitions **/
.fade-enter {
  opacity: 0;
  translate: -30px 0px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-leave-to {
  opacity: 0;
  translate: -30px 0px;
}
</style>
