<template>
  <div class="card clickable" @click="$router.push('/product/' + productId)">
    <img :src="image" class="card-img-top" alt="Product image" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <p class="card-text">{{ price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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
}

.card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  height: 200px;
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
