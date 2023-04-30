<template>
  <div>
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="@/assets/pictures/carousel1.jpg"
            class="d-block w-100 height cover"
            alt="picture1"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Yakut Yüzük</h5>
            <p>Kadınların En Beğendiği Yüzük türü.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pictures/carousel2.webp"
            class="d-block w-100 height cover"
            alt="picture2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/pictures/carousel3.jpg"
            class="d-block w-100 height cover"
            alt="picture3"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Özel Tasarımlar</h5>
            <p>Çeşitli Tasarımlarla, İstediğiniz Modeli Seçiniz.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.height {
  height: 600px;
}
.cover {
  object-fit: cover;
}
</style>
