<template>
  <div id="app">
    <nav class="d-flex flex-column">
      <TopBar />
      <LogoComp />
      <div class="mb-4">
        <ul
          class="nav justify-content-center flex-column flex-sm-row fs-5 letterSpacing"
        >
          <li class="nav-item">
            <router-link
              class="nav-link active text fontFamilyInstrumentSerif"
              aria-current="page"
              to="/"
              ><p class="color">İndirim</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Kolye</p></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Bileklik</p></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Yüzük</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Küpe</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Hediye</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color">Setler</p>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import LogoComp from "@/components/header/LogoComp.vue";
import TopBar from "@/components/header/TopBar.vue";
export default {
  components: {
    LogoComp,
    TopBar,
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
.letterSpacing {
  letter-spacing: 0.08em;
}
.color {
  color: rgb(136, 136, 136);
}
.color:hover {
  color: black;
}
</style>
