<template>
  <div
    class="d-flex flex-column flex-xl-row justify-content-center align-items-center"
  >
    <ContactInformations />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/contactPage/ContactForm.vue";
import ContactInformations from "@/components/contactPage/ContactInformations.vue";
export default {
  components: {
    ContactForm,
    ContactInformations,
  },
};
</script>
