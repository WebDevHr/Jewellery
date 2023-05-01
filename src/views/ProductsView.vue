<template>
  <div class="container">
    <h1 class="my-5">Ürünler</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
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
import { mapState } from "vuex";
import ProductCard from "@/components/productPage/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
