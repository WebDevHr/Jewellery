<template>
  <div
    class="icon-description fs-1 mx-4 d-flex justify-content-center align-items-center"
    @mouseover="bounce"
  >
    <div class="description">
      <slot></slot>
    </div>
    <i :class="iconClass" class="color"></i>
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
  font-size: 20px;
}

.color {
  color: rgba(43, 135, 20, 0.536);
}
</style>
