<template>
  <div id="app">
    <nav class="d-flex flex-column">
      <TopBar />
      <HeaderComp />
      <div
        class="mb-4 border-top border-bottom d-flex justify-content-center align-items-center"
      >
        <ul
          class="nav justify-content-center flex-column flex-sm-row fs-5 letterSpacing"
        >
          <li class="nav-item my-3">
            <router-link
              class="nav-link active text fontFamilyInstrumentSerif"
              aria-current="page"
              to="/"
              ><p class="color mb-0">İndirim</p>
            </router-link>
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Kolye</p></router-link
            >
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Bileklik</p></router-link
            >
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Yüzük</p>
            </router-link>
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Küpe</p>
            </router-link>
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Hediye</p>
            </router-link>
          </li>
          <li class="nav-item my-3">
            <router-link class="nav-link fontFamilyInstrumentSerif" to="/about"
              ><p class="color mb-0">Setler</p>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import HeaderComp from "@/components/header/HeaderComp.vue";
import TopBar from "@/components/header/TopBar.vue";
export default {
  components: {
    HeaderComp,
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
.fontFamilyGreyQo {
  font-family: "GreyQo", sans-serif;
}
.letterSpacing {
  letter-spacing: 0.08em;
}
.color {
  color: rgb(136, 136, 136);
  transition: all 0.4s;
}
.color:hover {
  color: black;
  font-weight: bold;
}
</style>
