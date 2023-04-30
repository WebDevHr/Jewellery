<template>
  <div class="fontFamilyCinzel letterSpacing parallax-container border-bottom">
    <div class="row me-0">
      <div
        class="parallax-content d-flex flex-column justify-content-center align-items-center flex-xl-row pe-0 mx-0"
      >
        <div
          class="col-xl-8 col-9 order-2 order-lg-1 d-xl-flex justify-content-center align-items-center d-none"
        >
          <div class="row me-0 ms-xl-5 ms-xl-4 d-flex flex-column flex-xl-row">
            <div
              class="col-md-4 mb-3 imageHover image-class d-flex justify-content-center align-items-center p-0 mx-2"
              v-for="image in images"
              :key="image.id"
            >
              <img :src="image.src" class="img-fluid image-class" alt="" />
            </div>
            <div class="mt-3">
              <h1 class="fw-bold text-white">Alberello Jewellery</h1>
              <p class="text-center text-white fs-6">
                TÜM ÜRÜNLERIMIZ KENDI ATOLYEMIZDE EL YAPIMI OLARAK SIPARIS
                ÜZERINE ÜRETILMEKTEDIR.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-xl-4 d-flex justify-content-center align-items-center flex-column order-1 order-lg-2 pe-xl-5"
        >
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
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
  width: 230px;
  height: 230px;
  object-fit: cover;
}
.parallax-container {
  height: 500px; /* set the desired height of your parallax effect */
  background-image: url("@/assets/pictures/parallax-image.webp");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.parallax-container > .row {
  transform: translateY(-50%);
  position: relative;
  top: 50%;
}

.parallax-content {
  background: linear-gradient(to right, #00000091 0%, #0000002b 100%);
  height: 500px;
}

.imageHover {
  transition: all 0.5s;
}

.imageHover:hover {
  box-shadow: 0px 0px 30px rgb(255, 255, 255);
}
</style>
