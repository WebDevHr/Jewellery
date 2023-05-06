<template>
  <div class="container-xl my-5 fontFamilyKalam">
    <div class="row">
      <div class="col-md-3">
        <h3>Kategoriler</h3>
        <ul>
          <li
            v-for="(kategori, index) in kategoriler"
            :key="index"
            @click="
              () => {
                routeToCategory(kategori.key);
                scrollToTop();
              }
            "
          >
            {{ kategori.name }}
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h3>Kurumsal</h3>
        <ul>
          <li @click="aboutUs">Hakımızda</li>
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
import scrollToTopMixin from "@/mixin/scrollToTopMixin.js";
export default {
  mixins: [scrollToTopMixin],
  data() {
    return {
      kategoriler: [
        { name: "indirim", key: "home" },
        { name: "Kolye", key: "kolye" },
        { name: "Bileklik", key: "bileklik" },
        { name: "Yüzük", key: "yuzuk" },
        { name: "Küpe", key: "kupe" },
        { name: "Hediye", key: "hediye" },
        { name: "Setler", key: "setler" },
      ],
    };
  },
  methods: {
    contactUs() {
      this.$router.push({ name: "about" });
    },
    aboutUs() {
      this.$router.push({ name: "aboutus" });
    },
    routeToCategory(key) {
      this.$router.push({ name: "products", params: { key: key } });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
h3 {
  font-weight: 900;
  font-family: "InstrumentSerif", sans-serif;
  margin-bottom: 1.5vw;
}
ul li {
  color: rgb(134, 134, 134);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 0.4vw;
}
ul li:hover {
  color: rgb(0, 0, 0);
  translate: -4px 1px;
}
</style>
