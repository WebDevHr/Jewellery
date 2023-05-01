<template>
  <div class="container my-5">
    <div v-if="products.length == 0">
      <h3>Maalesef,</h3>
      <h5>Bu Kategoriye ait bir ürün bulunmadı</h5>
      <div>Ana Sayfaya Geri dönmek için Buaray tıklayın</div>
    </div>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="(product, index) in products"
        :key="index"
      >
        <ProductCard
          :productId="product.id"
          :image="product.image"
          :title="product.title"
          :description="product.description"
          :price="product.price"
        />
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
