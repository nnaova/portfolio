<script setup lang="ts">
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <main class="contact-page">
    <ContactSection />
  </main>
</template>

<style scoped>
.contact-page {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

@media (min-width: 768px) {
  .contact-page {
    padding: 2rem;
  }
}
</style>
