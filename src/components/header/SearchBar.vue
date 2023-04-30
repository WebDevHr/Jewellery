<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="input-group mb-3 input-width">
      <input
        type="text"
        class="form-control ps-5 rounded mt-lg-3 input-style text-center text-lg-start border border-2"
        placeholder="Aradığınız ürünün adını yazınız"
      />
      <div class="input-group-prepend mt-lg-3">
        <button class="btn buttonFocus" type="button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-group-prepend {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
}

.input-group-prepend button {
  height: 100%;
}

.input-width {
  width: 300px;
}
.input-style {
  outline: none;
  text-shadow: none;
  transition: all 0.4s;
}
.input-style:focus {
  box-shadow: 0px 0px 10px rgb(179, 179, 179);
}
input::placeholder {
  color: #999;
  font-style: italic;
  font-size: 14px;
}
.buttonFocus {
  border: none;
  color: rgb(170, 169, 169);
}

.buttonFocus:hover {
  color: black;
}

.buttonFocus:focus {
  border: none;
}
</style>
