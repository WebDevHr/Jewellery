<template>
  <div class="pageBackgroundColor">
    <div class="container-xl py-5">
      <div
        class="noFoundHeight d-flex flex-column justify-content-center align-items-center"
        v-if="products.length == 0"
      >
        <h3>Maalesef,</h3>
        <h5>Bu Kategoriye ait bir ürün bulunmadı</h5>
        <router-link class="mt-3 textColor pointer" :to="{ name: 'home' }">
          Ana Sayfaya Geri Dönmek için Buaray Tıklayın
          <i class="fa-solid fa-arrow-rotate-left ms-1"></i>
        </router-link>
      </div>

      <div class="row">
        <div
          class="col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center align-items-center"
          v-for="(product, index) in products"
          :key="index"
        >
          <ProductCard
            :product="product"
            :to="{ name: 'product', params: { key: product.id } }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "@/components/productPage/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getIndirim",
      "getKolye",
      "getBileklik",
      "getYuzuk",
      "getKupe",
      "getHediye",
      "getSetler",
    ]),
    key() {
      return this.$route.params.key;
    },
    products() {
      if (this.key == "indirim") {
        return this.getIndirim;
      } else if (this.key == "kolye") {
        return this.getKolye;
      } else if (this.key == "bileklik") {
        return this.getBileklik;
      } else if (this.key == "yuzuk") {
        return this.getYuzuk;
      } else if (this.key == "kupe") {
        return this.getKupe;
      } else if (this.key == "hediye") {
        return this.getHediye;
      } else if (this.key == "setler") {
        return this.getSetler;
      } else {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.pageBackgroundColor {
  background-color: #f8f9fa;
}

.pointer {
  cursor: pointer;
}

.textColor {
  color: rgb(154, 153, 153);
}

.textColor:hover {
  color: rgb(38, 38, 38);
}

@media screen and (min-width: 768px) {
  .noFoundHeight {
    height: 250px;
  }
}
</style>
