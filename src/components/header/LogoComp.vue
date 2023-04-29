<template>
  <div class="d-flex justify-content-center align-items-center my-3 my-lg-5">
    <transition appear>
      <div
        class="d-flex justify-content-center align-items-center rounded size-of-logo logo cursorPointer size font-size fontFamilyGreyQo px-3 px-lg-5"
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
  box-shadow: 5px 5px 15px rgb(192, 192, 192);
  color: black;
  translate: 0px -3px;
}
.cover {
  object-fit: fill;
}
.size {
  height: 80px;
}
.font-size {
  font-size: 60px;
  word-spacing: 20px;
}
</style>
