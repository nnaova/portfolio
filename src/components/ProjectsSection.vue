<script setup lang="ts">
import { ref } from 'vue'

// Définition du type de projet
interface Project {
  id: string
  title: string
  description: string
  longDescription: string[]
  image: string
  tags: string[]
  link?: string
  github?: string
  githubApi?: string
  category: string
  features: string[]
  technologies: string[]
  screenshots?: string[]
  role?: string
  status: 'en cours' | 'terminé' | 'en pause'
}

// Définition des projets spécifiques
const projects = ref<Project[]>([
  {
    id: '1',
    title: 'SBL App',
    description: 'Application web pour la gestion de tournois e-sportifs',
    longDescription: [
      "SBL App est une plateforme web dédiée à la gestion complète de tournois et compétitions e-sportives, de l'inscription des équipes jusqu'à la gestion des brackets et des résultats.",
      'Ce projet combine une API robuste développée avec Symfony et une interface utilisateur réactive construite avec Vue.js, offrant une expérience fluide aux organisateurs comme aux participants.',
      'La plateforme permet de gérer différents formats de tournois (élimination directe, double élimination, poules), avec un suivi en temps réel des scores et classements.',
    ],
    image: '/images/placeholder.jpg', // À remplacer par l'image réelle
    tags: ['Vue.js', 'Symfony', 'API REST', 'TypeScript', 'PHP'],
    link: 'https://sbl.alexandre-giordana.fr/',
    github: 'https://github.com/SBL-app/SBL-app',
    githubApi: 'https://github.com/SBL-app/api',
    category: 'web',
    features: [
      'Création et gestion de tournois personnalisables',
      "Système d'inscription des équipes et des joueurs",
      'Génération automatique des brackets et des matchs',
      'Tableau de bord pour les organisateurs',
      'Suivi des scores et des statistiques en temps réel',
      "Gestion des droits d'accès et des rôles",
    ],
    technologies: [
      "Symfony 6 pour l'API backend",
      'Vue.js 3 & TypeScript pour le frontend',
      'MySQL pour la base de données',
      'API REST avec JWT Authentication',
      'Docker pour le déploiement',
    ],
    role: 'Développeur principal et architecte',
    status: 'en cours',
  },
  {
    id: '2',
    title: 'Food Guess',
    description: 'Application mobile de paris sur le contenu des paniers alimentaires étudiants',
    longDescription: [
      'Food Guess est une application mobile ludique qui permet aux étudiants de parier sur le contenu des prochains paniers de collecte alimentaire.',
      "L'application offre une expérience interactive où les utilisateurs peuvent deviner quels produits seront disponibles dans la prochaine distribution, avec un système de points et de classement.",
      'Ce projet vise à gamifier et à sensibiliser à la redistribution alimentaire dans le milieu étudiant tout en créant une communauté autour de ces initiatives solidaires.',
      'Actuellement en développement actif, le projet combine une application mobile Flutter et une API Node.js pour offrir une expérience de jeu complète.',
    ],
    image: '/images/placeholder.jpg', // À remplacer par l'image réelle
    tags: ['Flutter', 'Node.js', 'Mobile', 'API REST', 'Jeu'],
    // Pas de lien vers un site pour le moment
    github: 'https://github.com/nnaova/food_guess',
    githubApi: 'https://github.com/nnaova/food_guess_api',
    category: 'mobile',
    features: [
      'Système de paris sur le contenu des paniers',
      'Classement des joueurs selon leurs prédictions',
      'Notifications pour les nouvelles collectes',
      'Historique des distributions passées',
      'Profils utilisateurs personnalisables',
      'Statistiques sur les aliments les plus fréquents',
    ],
    technologies: [
      'Flutter pour le développement mobile',
      'Node.js pour le backend API',
      'MongoDB pour la base de données',
      'Express.js pour la structure API',
      'Firebase pour les notifications push',
    ],
    screenshots: ['/images/foodguess-screenshot1.jpg', '/images/foodguess-screenshot2.jpg'],
    role: 'Créateur et développeur principal',
    status: 'en cours',
  },
])

// Projet actuellement affiché en détail (pour le mode vue détaillée)
const selectedProject = ref<Project | null>(null)

// État de l'interface
const viewMode = ref<'grid' | 'detail'>('grid')

// Fonction pour afficher les détails d'un projet
function showProjectDetails(project: Project) {
  selectedProject.value = project
  viewMode.value = 'detail'
}

// Fonction pour revenir à la vue grille
function backToGrid() {
  viewMode.value = 'grid'
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">Mes Projets Phares</h2>

    <!-- Vue grille des projets -->
    <div v-if="viewMode === 'grid'" class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :class="{
          'status-ongoing': project.status === 'en cours',
          'status-completed': project.status === 'terminé',
        }"
        @click="showProjectDetails(project)"
      >
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">{{ project.title }}</h3>
            <span class="status-badge" :class="project.status">{{ project.status }}</span>
          </div>
          <p class="project-description">{{ project.description }}</p>

          <!-- Section des tags -->
          <div v-if="project.tags.length > 0" class="project-tags">
            <h4 class="tags-title">Technologies</h4>
            <div class="tags-container">
              <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
            </div>
          </div>

          <div class="view-more">
            <button class="view-details-btn">Voir les détails</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue détaillée d'un projet -->
    <div v-if="viewMode === 'detail' && selectedProject" class="project-detail-view">
      <button class="back-button" @click="backToGrid">← Retour aux projets</button>

      <div class="project-detail-header">
        <h3 class="project-detail-title">{{ selectedProject.title }}</h3>
        <span class="status-badge" :class="selectedProject.status">{{
          selectedProject.status
        }}</span>
      </div>

      <!-- Description complète -->
      <div class="project-detail-description">
        <p
          v-for="(paragraph, index) in selectedProject.longDescription"
          :key="index"
          class="description-paragraph"
        >
          {{ paragraph }}
        </p>

        <div v-if="selectedProject.role" class="project-role">
          <strong>Mon rôle:</strong> {{ selectedProject.role }}
        </div>
      </div>

      <!-- Fonctionnalités -->
      <div class="project-features">
        <h4 class="features-title">Fonctionnalités principales</h4>
        <ul class="features-list">
          <li
            v-for="(feature, index) in selectedProject.features"
            :key="index"
            class="feature-item"
          >
            {{ feature }}
          </li>
        </ul>
      </div>

      <!-- Technologies -->
      <div class="project-technologies">
        <h4 class="technologies-title">Technologies utilisées</h4>
        <div class="technologies-container">
          <span
            v-for="(tech, index) in selectedProject.technologies"
            :key="index"
            class="technology-item"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Screenshots si disponibles -->
      <div
        v-if="selectedProject.screenshots && selectedProject.screenshots.length > 0"
        class="project-screenshots"
      >
        <h4 class="screenshots-title">Captures d'écran</h4>
        <div class="screenshots-container">
          <img
            v-for="(screenshot, index) in selectedProject.screenshots"
            :key="index"
            :src="screenshot"
            class="screenshot-img"
            alt="Screenshot du projet"
          />
        </div>
      </div>

      <!-- Liens -->
      <div class="project-detail-links">
        <a
          v-if="selectedProject.github"
          :href="selectedProject.github"
          target="_blank"
          class="project-link github"
        >
          Frontend sur GitHub
        </a>
        <a
          v-if="selectedProject.githubApi"
          :href="selectedProject.githubApi"
          target="_blank"
          class="project-link github"
        >
          API sur GitHub
        </a>
        <a
          v-if="selectedProject.link"
          :href="selectedProject.link"
          target="_blank"
          class="project-link live"
        >
          Visiter le site
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 2rem 0;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  border-radius: 2px;
}

/* Vue grille des projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2.5rem;
}

.project-card {
  background-color: var(--color-background-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  border-top: 5px solid #3498db;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.status-ongoing {
  border-top-color: #f39c12; /* Orange pour "en cours" */
}

.status-completed {
  border-top-color: #2ecc71; /* Vert pour "terminé" */
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-heading);
  margin: 0;
}

.org-badge {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  background-color: rgba(52, 152, 219, 0.15);
  color: #3498db;
  border-radius: 20px;
  font-weight: 500;
  display: inline-block;
  border: 1px solid rgba(52, 152, 219, 0.3);
}

.org-project {
  border-left: 4px solid #3498db;
}

.project-description {
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-language {
  margin-bottom: 1rem;
}

.language-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.language-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
  background-color: rgba(52, 152, 219, 0.15);
  color: #3498db;
  border: 1px solid rgba(52, 152, 219, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-tags {
  margin-bottom: 1rem;
}

.tags-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  background-color: rgba(142, 68, 173, 0.1);
  color: #8e44ad;
  border-radius: 4px;
  border: 1px solid rgba(142, 68, 173, 0.2);
}

.project-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-light);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link.github {
  background-color: #333;
  color: white;
}

.project-link.live {
  background-color: #3498db;
  color: white;
}

.project-link:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-detail-links {
    flex-direction: column;
  }
}

/* Nouveaux styles pour la vue détaillée */
.project-detail-view {
  background-color: var(--color-background-soft);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
}

.back-button {
  padding: 0.5rem 1rem;
  background-color: var(--color-background-mute);
  color: var(--color-text);
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.back-button:hover {
  background-color: var(--color-border);
  transform: translateX(-5px);
}

.project-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 1.5rem;
}

.project-detail-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-heading);
  margin: 0;
}

.project-detail-description {
  margin-bottom: 2.5rem;
}

.description-paragraph {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  color: var(--color-text);
}

.project-role {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--color-background-mute);
  border-left: 4px solid #3498db;
  border-radius: 4px;
  font-size: 1.05rem;
}

.project-features,
.project-technologies {
  margin-bottom: 2.5rem;
}

.features-title,
.technologies-title,
.screenshots-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 1rem;
}

.features-title::before,
.technologies-title::before,
.screenshots-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10%;
  height: 80%;
  width: 4px;
  background-color: #3498db;
  border-radius: 2px;
}

.features-list {
  list-style-type: none;
  padding-left: 1rem;
}

.feature-item {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.5;
}

.feature-item::before {
  content: '•';
  color: #3498db;
  position: absolute;
  left: 0;
  font-size: 1.4rem;
  line-height: 1;
}

.technologies-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

.technology-item {
  padding: 0.5rem 1rem;
  background-color: rgba(52, 152, 219, 0.1);
  color: #3498db;
  border-radius: 6px;
  font-size: 1rem;
  border: 1px solid rgba(52, 152, 219, 0.2);
}

.screenshots-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.screenshot-img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.screenshot-img:hover {
  transform: scale(1.02);
}

.project-detail-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.view-more {
  margin-top: 1.5rem;
  text-align: center;
}

.view-details-btn {
  padding: 0.6rem 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}
</style>
