<script setup lang="ts">
import Hero from '../components/Hero.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToPage = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<template>
  <main class="home">
    <Hero
      name="Alexandre Giordana"
      title="Développeur Web Full Stack"
      summary="Passionné par le développement web et la création d'applications innovantes.  
      Je crée des expériences web modernes et interactives avec une attention particulière aux détails."
    />
  </main>
</template>

<style scoped>
.home {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navigation-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.nav-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .home {
    padding: 2rem;
  }

  .navigation-buttons {
    margin-top: 4rem;
  }
}
</style>
