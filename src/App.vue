<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterSection from './components/FooterSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <div class="app-container">
    <header class="header">
      <div class="header-content">
        <div class="logo-container">
          <RouterLink to="/" class="logo-link">
            <span class="logo-text">Portfolio</span>
          </RouterLink>
        </div>

        <nav class="main-nav">
          <RouterLink to="/" class="nav-link">Accueil</RouterLink>
          <RouterLink to="/about" class="nav-link">À propos</RouterLink>
          <RouterLink to="/projects" class="nav-link">Projets</RouterLink>
          <RouterLink to="/skills" class="nav-link">Compétences</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>

    <div class="main-content">
      <RouterView />
    </div>

    <FooterSection class="full-width" />
  </div>
</template>

<style>
/* Styles globaux */
:root {
  --header-height: 70px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 1.6;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  height: var(--header-height);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-link {
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.contact-btn {
  background-color: var(--color-primary);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.contact-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

/* Contenu principal */
.main-content {
  flex: 1;
  width: 100%;
}

/* Footer pleine largeur */
.full-width {
  width: 100%;
  align-self: stretch;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }

  .header {
    height: auto;
    position: relative;
  }

  .logo-container {
    margin-bottom: 1rem;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
