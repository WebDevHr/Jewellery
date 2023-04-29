<template>
  <div class="d-flex justify-content-center align-items-center my-5">
    <transition appear>
      <div
        class="d-flex justify-content-center align-items-center rounded size-of-logo logo cursorPointer size fs-3 fontFamilyCinzel px-4"
        @click="goToHome"
      >
        Alberello Jewellery
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
  box-shadow: 5px 5px 15px rgb(173, 173, 173);
  color: black;
  scale: 1.05;
  translate: 0px -5px;
}
.cover {
  object-fit: fill;
}
.size {
  height: 60px;
}
</style>
