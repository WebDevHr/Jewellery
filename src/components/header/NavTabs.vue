<template>
  <div>
    <div class="d-md-none d-flex justify-content-center border">
      <div class="d-flex justify-content-center align-items-center menuButton">
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
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link active text fontFamilyInstrumentSerif"
            aria-current="page"
            to="/"
            @click="goToRelated()"
            ><p class="color mb-0">İndirim</p>
          </router-link>
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Kolye</p></router-link
          >
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Bileklik</p></router-link
          >
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Yüzük</p>
          </router-link>
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Küpe</p>
          </router-link>
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Hediye</p>
          </router-link>
        </li>
        <li class="nav-item my-3 item">
          <router-link
            class="nav-link fontFamilyInstrumentSerif"
            to="/about"
            @click="goToRelated()"
            ><p class="color mb-0">Setler</p>
          </router-link>
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
        clearTimeout(this.timeoutId);
        this.isClicked = true;
        gsap.from(".item", {
          duration: 0.8,
          opacity: 0,
          y: -150,
          ease: "Power2.easeOut",
          stagger: 0.1,
        });
      } else {
        this.timeoutId = setTimeout(() => {
          this.isClicked = false;
        }, 1000);
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
    goToRelated() {
      // let tempRoute = item.toLowerCase().replace(" ", "");
      // let tempPath = "/" + tempRoute;
      // if (this.$route.path != tempPath) {
      //   this.$router.push({ name: tempRoute });
      // }
      this.isActive = !this.isActive;
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
</style>
