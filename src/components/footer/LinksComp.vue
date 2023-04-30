<template>
  <div class="container-xl my-5 fontFamilyKalam">
    <div class="row">
      <div class="col-md-3">
        <h3>Kategoriler</h3>
        <ul>
          <li>indirim</li>
          <li>Kolye</li>
          <li>Bileklik</li>
          <li>Yüzük</li>
          <li>Küpe</li>
          <li>Hediye</li>
          <li>setler</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h3>Kurumsal</h3>
        <ul>
          <li>Hakımızda</li>
          <li @click="contactUs">iletişim</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h3>Müşteri hizmetleri</h3>
        <ul>
          <li>İade ve iptal bilgileri</li>
          <li>Mesafeli Satış sözleşmesi</li>
          <li>iletişim Rehberi</li>
          <li>Sıkca Sorulen Sorular</li>
        </ul>
      </div>
      <div class="col-md-3">
        <h3>Hızlı erişim</h3>
        <ul>
          <li>Ana Sayfa</li>
          <li>Yeni Ürünler</li>
          <li>Sepetim</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    contactUs() {
      this.$router.push({ name: "about" });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
h3 {
  font-family: "InstrumentSerif", sans-serif;
}
ul li {
  color: rgb(180, 180, 180);
  cursor: pointer;
  transition: all 0.3s;
}
ul li:hover {
  color: rgb(52, 52, 52);
  translate: -5px;
}
</style>
