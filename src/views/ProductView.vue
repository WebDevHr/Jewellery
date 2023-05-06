<template>
  <div class="backgroundColor">
    <div
      class="product-view container justify-content-center justify-content-xl-between align-items-center py-5"
    >
      <div class="product-image col-lg-6 border p-4 rounded">
        <img :src="item.image" :alt="item.title" />
      </div>
      <div class="product-info col-lg-6 mx-lg-5 my-lg-5">
        <h2 class="product-title">{{ item.title }}</h2>
        <p class="product-description">{{ item.description }}</p>
        <p class="product-price">{{ item.price }} TL</p>
        <div class="product-rating">
          <span
            class="star"
            v-for="i in 5"
            :key="i"
            :class="{ filled: i <= item.ratings }"
            >&#9733;</span
          >
        </div>
        <BaseButton :label="label" class="mt-5" />
      </div>
      <div class="col-12 text-start my-lg-5">
        <BaseComment />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      label: "Sepetime Ekle",
      newComment: {
        author: "",
        text: "",
      },
    };
  },
  computed: {
    item() {
      return this.product[0];
    },
  },
  methods: {
    submitComment() {
      // Emit a custom event with the new comment data
      this.$emit("new-comment", this.newComment);

      // Reset the form
      this.newComment.author = "";
      this.newComment.text = "";
    },
  },
};
</script>

<style scoped>
.product-view {
  display: flex;
  flex-wrap: wrap;
}

.product-image {
  position: relative;
  width: 400px;
  height: 400px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-title {
  font-size: 2rem;
  margin: 0;
}

.product-price {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.product-rating {
  font-size: 2rem;
}

.star {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
  color: #bbb;
  cursor: pointer;
}

.star.filled {
  color: orange;
}

.comment-list {
  margin: 1rem 0;
  padding: 0;
  list-style: none;
}

.comment {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 5px;
}

.comment-author {
  font-weight: bold;
}

.comment-text {
  margin: 0;
}
.backgroundColor {
  background-color: #f7f7f7;
}
</style>
