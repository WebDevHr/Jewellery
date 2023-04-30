<template>
  <div class="col-xl-6 col-12 my-5">
    <h1 class="mt-5 mb-3">Bizimle iletişime geçin</h1>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a
        class="text-decoration-none color"
        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195885.05345967514!2d32.59795501252231!3d39.90325990283693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1682864198539!5m2!1sen!2str"
        ><font-awesome-icon
          class="me-2"
          :icon="['fas', 'location-dot']"
        />Ankaradaki Şübemiz</a
      >
    </div>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a
        class="text-decoration-none color"
        href="mailto: info@alberellojewellery.com"
        ><font-awesome-icon class="me-2" :icon="['fas', 'envelope']" />
        info@alberellojewellery.com
      </a>
    </div>
    <div
      class="d-flex justify-content-center align-items-center underlineStyle p-2"
    >
      <a href="tel:+905331317865" class="text-decoration-none color"
        ><font-awesome-icon class="me-2" :icon="['fas', 'phone']" />
        Bizi Arayın +90 (533) 131-7865
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "Courgette", sans-serif;
}
.underlineStyle {
  transition: text-decoration 0.5s;
}
.underlineStyle:hover {
  text-decoration: underline;
}
.color {
  color: rgb(151, 151, 151);
  transition: color 0.3s;
}
.color:hover {
  color: rgb(49, 49, 49);
}
</style>
