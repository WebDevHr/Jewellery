<template>
  <div class="container">
    <h1 v-if="products" class="my-5">Ürünler</h1>
    <h1 v-else>Bir ürün bu Kategoriye ait bulunmadı</h1>
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
      console.log(this.$route.params.key);
      if (this.key == "kolye") {
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
