<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentYear = new Date().getFullYear()
const name = 'Alexandre Giordana'
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo">
        <h3 class="footer-name">{{ name }}</h3>
        <p class="footer-tagline">Développeur Web Full Stack</p>
      </div>

      <div class="footer-links">
        <div class="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/about">À propos</router-link></li>
            <li><router-link to="/skills">Compétences</router-link></li>
            <li><router-link to="/projects">Projets</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-social">
          <h4>Réseaux Sociaux</h4>
          <SocialLinks color="light" />
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/alexandre-giordana-3193a0243/" target="_blank"
                >LinkedIn</a
              >
            </li>
            <li><a href="https://github.com/nnaova" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">© {{ currentYear }} {{ name }}. Tous droits réservés.</p>
      <p class="tech">Réalisé avec Vue.js & TypeScript</p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  // Ce script n'est plus nécessaire car nous utilisons maintenant router-link
  // mais nous le conservons pour la compatibilité avec le composant
}
</script>

<style scoped>
.footer {
  background-color: var(--color-background-soft);
  padding: 3rem 2rem 1.5rem;
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer-logo {
  text-align: center;
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: var(--color-text-soft);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-nav h4,
.footer-social h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  position: relative;
}

.footer-nav h4::after,
.footer-social h4::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #3498db;
}

.footer-nav ul,
.footer-social ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav li,
.footer-social li {
  margin-bottom: 0.75rem;
}

.footer-nav a,
.footer-social a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-nav a:hover,
.footer-social a:hover {
  color: #3498db;
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.copyright,
.tech {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .footer-logo {
    text-align: left;
  }

  .footer-links {
    flex-direction: row;
    gap: 4rem;
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
    width: 100%;
  }
}
</style>
