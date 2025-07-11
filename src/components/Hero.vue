<script setup lang="ts">
// Définition des propriétés
interface Props {
  name: string
  title: string
  summary: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Votre Nom',
  title: 'Développeur Web Full Stack',
  summary: "Passionné par le développement web et la création d'applications innovantes",
})
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="name">{{ name }}</h1>
      <h2 class="title">{{ title }}</h2>
      <p class="summary">{{ summary }}</p>
      <div class="cta-buttons">
        <router-link to="/projects" class="cta-button primary">Voir mes projets</router-link>
        <router-link to="/skills" class="cta-button secondary">Mes compétences</router-link>
      </div>
    </div>
    <div class="hero-image">
      <!-- Remplacez le placeholder par votre photo -->
      <img src="/images/profile.jpg" alt="Photo de profil" class="profile-image" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--color-background-soft), var(--color-background));
  border-radius: 8px;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text-soft);
  margin-bottom: 1rem;
}

.summary {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary {
  background-color: #3498db;
  color: white;
}

.primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 2px solid #3498db;
}

.secondary:hover {
  background-color: rgba(52, 152, 219, 0.1);
  transform: translateY(-2px);
}

.hero-image {
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 4px solid var(--color-border);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 2rem;
  }

  .hero-content {
    text-align: left;
  }

  .cta-buttons {
    justify-content: flex-start;
  }

  .hero-image {
    margin-bottom: 0;
    margin-left: 2rem;
  }
}
</style>
