<template>
  <div
    class="d-flex justify-content-center align-items-center my-5 py-4 backGround"
  >
    <BarItem
      v-for="(barItem, index) in barItems"
      :key="index"
      :iconClass="barItem.iconClass"
      >{{ barItem.title }}</BarItem
    >
  </div>
</template>

<script>
import BarItem from "@/components/firstPage/BarItem.vue";
export default {
  components: {
    BarItem,
  },
  data() {
    return {
      barItems: [
        {
          iconClass: "fa-solid fa-truck-fast",
          title: "Ücretsiz Kargo",
        },
        {
          iconClass: "fa-solid fa-arrow-right-arrow-left",
          title: "Kolay iade",
        },
        {
          iconClass: "fa-solid fa-credit-card",
          title: "Taksit imkanı",
        },
        {
          iconClass: "fa-solid fa-shield",
          title: "Güvenli Alışveriş",
        },
        {
          iconClass: "fa-solid fa-gift",
          title: "Özel Şık Kutu",
        },
        {
          iconClass: "fa-solid fa-hand",
          title: "El Yapımı",
        },
      ],
    };
  },
};
</script>

<style scoped>
.backGround {
  background-color: rgb(246, 246, 246);
}
</style>
