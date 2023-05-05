<template>
  <div class="d-flex justify-content-center align-items-center">
    <div
      class="mx-2 color d-flex flex-column justify-content-center align-items-center"
    >
      <div class="px-2 mx-2 fs-3">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <div class="fontFamilyInstrumentSerif font-size color-hover">Sepetim</div>
    </div>
    <div
      class="mx-2 color d-flex flex-column justify-content-center align-items-center"
    >
      <div class="px-2 mx-2 fs-3">
        <i class="fas fa-heart"></i>
      </div>
      <div class="fontFamilyInstrumentSerif font-size color-hover">
        Favorilerim
      </div>
    </div>
    <div
      class="mx-2 d-flex color flex-column justify-content-center align-items-center"
    >
      <LoginDropdown
        ><template #buttonText>
          <div class="px-2 mx-2 fs-3">
            <i class="fas fa-user"></i>
          </div>
          <div class="fontFamilyInstrumentSerif font-size">Giriş yap</div>
        </template>
      </LoginDropdown>
    </div>
  </div>
</template>

<script>
import LoginDropdown from "@/components/header/LoginDropdown.vue";
export default {
  components: {
    LoginDropdown,
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>
.color {
  color: rgb(102, 102, 102);
  transition: all 0.4s;
}
.color:hover,
.color:hover .color-hover {
  color: rgb(39, 39, 39);
  cursor: pointer;
}
.font-size {
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
}
</style>
