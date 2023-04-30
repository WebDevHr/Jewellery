<template>
  <div
    class="icon-description fs-1 mx-4 d-flex justify-content-center align-items-center"
    @mouseover="addIconClass"
    @mouseout="removeIconClass"
  >
    <div class="description">
      <slot></slot>
    </div>
    <i ref="icon" :class="iconClass" class="color"></i>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    bounce() {
      this.isActive = !this.isActive;
    },
    addIconClass() {
      // Get the icon element using a ref
      const icon = this.$refs.icon;

      // Add a class to the icon element
      icon.classList.add("fa-bounce");
    },
    removeIconClass() {
      // Get the icon element using a ref
      const icon = this.$refs.icon;

      // Remove a class from the icon element
      icon.classList.remove("fa-bounce");
    },
  },
};
</script>

<style>
.icon-description {
  display: flex;
  align-items: center;
}

.icon-description i {
  margin-left: 1vw;
}

.icon-description .description {
  font-size: 18px;
}

.color {
  color: rgba(43, 135, 20, 0.536);
}
</style>
