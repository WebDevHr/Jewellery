<template>
  <div id="app">
    <nav class="d-flex flex-column">
      <TopBar />
      <HeaderComp />
      <div
        class="border-top border-bottom d-flex justify-content-center align-items-center"
      >
        <ul
          class="nav d-flex justify-content-center flex-column flex-sm-row fs-5 letterSpacing"
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
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "@/components/header/HeaderComp.vue";
import TopBar from "@/components/header/TopBar.vue";
import FooterComp from "@/components/footer/FooterComp.vue";
export default {
  components: {
    HeaderComp,
    TopBar,
    FooterComp,
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
}
.nav-link:hover .color {
  color: #333;
  font-weight: bold;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  z-index: 1;
  padding: 10px;
  color: #333;
  text-decoration: none;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #333;
  transition: width 0.5s ease-out;
}

.nav-link:hover::before {
  width: 100%;
}
</style>
