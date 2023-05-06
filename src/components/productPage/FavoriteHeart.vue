<template>
  <i
    :class="['heart-icon', 'fas', 'fa-heart', { 'is-active': isActive }]"
    @click="toggleHeart"
  ></i>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  methods: {
    toggleHeart() {
      this.$emit("toggle");
    },
  },
};
</script>

<style>
.heart-icon {
  cursor: pointer;
  color: #ccc;
  transition: color 0.2s;
}

.heart-icon.is-active {
  color: #ff4d4d;
}
</style>
