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
      class="mx-2 color d-flex flex-column justify-content-center align-items-center"
    >
      <div class="px-2 mx-2 fs-3">
        <i class="fas fa-user"></i>
      </div>
      <div class="fontFamilyInstrumentSerif font-size color-hover">Profil</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.color {
  color: rgb(136, 136, 136);
  transition: all 0.4s;
}
.color:hover,
.color:hover .color-hover {
  color: rgb(66, 66, 66);
  scale: 1.05;
  cursor: pointer;
}
.font-size {
  font-size: 12px;
  letter-spacing: 1px;
}
</style>
