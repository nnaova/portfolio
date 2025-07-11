<script setup lang="ts">
import SkillsSection from '../components/SkillsSection.vue'
</script>

<template>
  <main class="skills-page">
    <SkillsSection />
  </main>
</template>

<style scoped>
.skills-page {
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
  .skills-page {
    padding: 2rem;
  }
}
</style>
