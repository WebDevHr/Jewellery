<template>
  <div class="m-0 p-0 fontFamilyInstrumentSerif">
    <h5 class="text-white m-0 p-0 fontSize py-1 barBackgroundColor">
      %5 inidiriminden yararlanmak için tıklayın
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fontSize {
  font-size: 1rem;
}
.barBackgroundColor {
  background-color: #bbbd15;
  transition: background-color 0.5s linear, background-position 0.5s ease-in-out; /* Set the transition effect */
  background-position: -100% center;
}
.barBackgroundColor:hover {
  background-color: #676905; /* Set the new background color when hovered */
  background-position: 100% center; /* Slide the background in from the right */
}
</style>
