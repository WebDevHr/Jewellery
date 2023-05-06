<template>
  <div class="position">
    <div class="d-md-none d-flex justify-content-center border-0 border-md">
      <div
        class="d-flex justify-content-center align-items-center menuButton border-0 ham"
      >
        <div
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': isActive }"
          @click="toggleNavbar"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div
      class="border-top border-bottom justify-content-center align-items-center display"
      v-if="isActive"
    >
      <ul
        class="nav d-flex justify-content-center flex-column flex-md-row fs-5 letterSpacing"
      >
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link active fontFamilyInstrumentSerif"
            aria-current="page"
            @click="goToRelated('indirim')"
          >
            <div class="color mb-0">İndirim</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('kolye')"
          >
            <div class="color mb-0">Kolye</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('bileklik')"
          >
            <div class="color mb-0">Bileklik</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('yuzuk')"
          >
            <div class="color mb-0">Yüzük</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('kupe')"
          >
            <div class="color mb-0">Küpe</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('hediye')"
          >
            <div class="color mb-0">Hediye</div>
          </div>
        </li>
        <li class="nav-item my-md-3 my-0 mx-2 item pointer">
          <div
            class="nav-link fontFamilyInstrumentSerif"
            @click="goToRelated('setler')"
          >
            <div class="color mb-0">Setler</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(PixiPlugin, MotionPathPlugin);
export default {
  data() {
    return {
      tabs: ["Kolye", "Bileklik", "Yüzük", "Küpe", "Hediye", "Setler"],
      activeTab: 0,
      isActive: false,
      timeoutId: null,
    };
  },
  created() {
    // set initial value based on screen size
    this.isActive = window.innerWidth > 768;

    // update value when screen size changes
    window.addEventListener("resize", () => {
      this.isActive = window.innerWidth > 768 ? true : false;
    });
  },
  methods: {
    toggleNavbar() {
      gsap.set(".item", { opacity: 1, y: 0 });
      if (!this.isActive) {
        gsap.from(".item", {
          duration: 0.8,
          opacity: 0,
          y: -150,
          ease: "Power2.easeOut",
          stagger: 0.1,
        });
      } else {
        gsap.to(".item", {
          duration: 0.8,
          opacity: 0,
          y: -150,
          ease: "Power2.easeOut",
          stagger: 0.1,
        });
      }
      this.isActive = !this.isActive;
    },
    goToRelated(temp) {
      if (window.innerWidth <= 768) {
        this.isActive = !this.isActive;
      }
      this.$router.push({ name: "products", params: { key: temp } });
    },
  },
};
</script>

<style scoped>
.nav-link:hover .color {
  color: #333;
  font-weight: 900;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  z-index: 1;
  padding: 10px;
  color: rgb(99, 132, 14);
  letter-spacing: 3px;
  text-decoration: none;
  font-weight: 700;
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
.hamburger {
  width: 50px;
  height: 50px;
}
.hamburger span {
  width: 50px;
  height: 5px;
  background: #000;
}
.navbar-burger {
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  padding: 0;
  position: relative;
  width: 2rem;
}

.navbar-burger span {
  background-color: #000;
  display: block;
  height: 3.75px;
  left: 0;
  position: absolute;
  transform: rotate(0deg);
  transition: all 0.8s ease-in-out;
  width: 100%;
  border-radius: 5px;
}

.navbar-burger span:nth-child(1) {
  top: 0.3rem;
}

.navbar-burger span:nth-child(2) {
  top: 0.85rem;
  transition: all 0.4s ease-in-out;
}

.navbar-burger span:nth-child(3) {
  top: 1.4rem;
}

.navbar-burger.is-active span:nth-child(1) {
  transform: rotate(405deg);
  top: 0.85rem;
  left: 0;
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
  width: 0px;
  height: 0px;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: rotate(-405deg);
  top: 0.85rem;
  left: 0;
}

.cursorPointer {
  cursor: pointer;
}
@media screen and (max-width: 991px) {
  .menu {
    display: flex;
    flex-direction: column;
    background-color: white;
  }
}
.menu {
  display: flex;
  justify-content: center;
}

.pointer {
  cursor: pointer;
}

@media screen and (max-width: 769px) {
  /* .position {
    position: relative;
    right: 50px;
    top: 50px;
    z-index: 1000;
  } */
  .ham {
    position: absolute;
    right: 50px;
    top: 235px;
    z-index: 1000;
  }
  /* .hamWidth {
    position: absolute;
    top: 300px;
    width: 100%;
  } */
}
</style>
