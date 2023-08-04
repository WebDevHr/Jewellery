<template>
  <div
    class="container"
    @mousemove="handleMouseMove"
    ref="runawayContainer"
    @mouseleave="handleMouseLeave"
  >
    <button ref="runawayButton" class="runaway-button">Click me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      const containerRect = this.$refs.runawayContainer.getBoundingClientRect();
      const fromTop = this.mouseY - containerRect.top;
      const fromLeft = this.mouseX - containerRect.left;
      console.log(fromLeft, fromTop);
      if (fromLeft < 200 && fromTop < 200) {
        this.$refs.runawayButton.style.transform = `translate(${
          fromLeft - 60
        }px, ${fromTop}px)`;
      } else if (fromLeft > 200 && fromTop > 200) {
        this.$refs.runawayButton.style.transform = `translate(${
          fromLeft - 400
        }px, ${fromTop - 350}px)`;
      } else if (fromLeft < 200 && fromTop > 200) {
        this.$refs.runawayButton.style.transform = `translate(${fromLeft}px, ${
          fromTop - 350
        }px)`;
      } else if (fromLeft > 200 && fromTop < 200) {
        this.$refs.runawayButton.style.transform = `translate(${
          fromLeft - 400
        }px, ${fromTop}px)`;
      }
    },
    handleMouseLeave() {
      this.$refs.runawayButton.style.transform = `translate(0 , 0)`;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.runaway-button {
  position: absolute;
  width: 120px;
  height: 50px;
  padding: 12px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.1s;
}
</style>
