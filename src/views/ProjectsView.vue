<script setup lang="ts">
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<template>
  <main class="projects-page">
    <ProjectsSection />
  </main>
</template>

<style scoped>
.projects-page {
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

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  border-radius: 2px;
}

.page-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .projects-page {
    padding: 2rem;
  }
}
</style>
