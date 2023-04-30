<template>
  <div class="container fontFamilyCinzel letterSpacing">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-4 mb-3" v-for="image in images" :key="image.id">
            <img :src="image.src" class="img-fluid image-class" alt="" />
          </div>
          <div>
            <h1 class="fw-bold">Alberello Jewellery</h1>
            <p class="text-center text-decoration-underline">
              TÜM ÜRÜNLERIMIZ KENDI ATOLYEMIZDE EL YAPIMI OLARAK SIPARIS ÜZERINE
              ÜRETILMEKTEDIR.
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-md-4 d-flex justify-content-center align-items-center flex-column"
      >
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: require("@/assets/pictures/partTwo4.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/pictures/partTwo2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/pictures/partTwo3.jpg"),
        },
      ],
      title: "TASARIMLARIMIZDA GİZLİ BİR AŞK VAR!",
      description:
        "Zevkinize ve tarzınıza uygun şık tasarımları özenle üretiyoruz.",
    };
  },
};
</script>

<style scoped>
.image-class {
  width: 280px;
  height: 280px;
  object-fit: cover;
}
</style>
