<template>
  <button class="btn btn-primary btn-lg modern-button" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Click me!",
    },
  },
  methods: {
    handleClick() {
      // Handle button click
    },
  },
};
</script>

<style scoped>
.modern-button {
  background-color: white;
  border-color: rgb(99, 132, 14);
  color: #000000;

  border-radius: 10px;
  padding: 7px 30px;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.5s ease;
}

.modern-button:hover {
  background-color: rgb(99, 132, 14);
  border-color: rgb(99, 132, 14);
  color: white;
}
</style>
