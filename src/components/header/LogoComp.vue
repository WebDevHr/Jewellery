<template>
  <div class="d-flex justify-content-center align-items-center my-3 my-lg-4">
    <transition appear>
      <div
        class="d-flex flex-column justify-content-center align-items-center rounded size-of-logo logo cursorPointer size font-size fontFamilyPlayfairDisplay px-3 px-lg-5"
        @click="goToHome"
      >
        <h1 class="fontFamilyPlayfairDisplay h1LetterSpacing h1Style">
          Alberello
        </h1>
        <h3 class="h3Style">Jewellery</h3>
        <!-- <img
          class="rounded cover"
          src="@/assets/pictures/banner.png"
          alt="Alberello-logo"
          width="300"
          height="70"
        /> -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push({ name: "home" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.cursorPointer {
  cursor: pointer;
}
.logo {
  transition: all 0.4s;
}
.logo:hover {
  color: rgb(0, 0, 0);
}
.cover {
  object-fit: fill;
}
.size {
  height: 100px;
}

.h1LetterSpacing {
  letter-spacing: 10px;
}

.h1Style {
  color: rgb(99, 132, 14);
  font-size: 60px;
}

.h3Style {
  color: rgb(225, 225, 16);
}
</style>
