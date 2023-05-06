<template>
  <div
    class="card clickable rounded-top overflowHiden"
    @click="$router.push('/product/' + product.id)"
  >
    <div class="imageContainer">
      <img :src="product.image" class="card-img-top" alt="Product image" />
      <favorite-heart
        :is-active="isFavorite(product)"
        @toggle="toggleFavorite(product)"
      ></favorite-heart>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ product.title }}</h3>
      <p class="card-text">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
import FavoriteHeart from "@/components/productPage/FavoriteHeart";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    FavoriteHeart,
  },
  computed: {
    favorites() {
      return this.$store.state.user.favorites;
    },
  },
  methods: {
    isFavorite(product) {
      return this.favorites && this.favorites.includes(product.id);
    },
    toggleFavorite(product) {
      if (this.isFavorite(product)) {
        this.$store.commit("REMOVE_FAVORITE", product.id);
      } else {
        this.$store.commit("ADD_FAVORITE", product.id);
      }
    },
  },
};
</script>

<style>
.card {
  border: none;
  border-radius: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  width: 400px;
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.card:hover img {
  transform: scale(1.2);
}

.imageContainer {
  width: 400px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.overflowHiden {
  overflow: hidden;
}

.imageContainer img {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
}

.imageContainer:hover img {
  transform: scale(1.2);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 0.5rem;
}

.clickable {
  cursor: pointer;
}
</style>
