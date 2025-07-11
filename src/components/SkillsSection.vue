<script setup lang="ts">
import { ref, computed } from 'vue'

// Définition des types
interface Skill {
  name: string
  categories: ('frontend' | 'backend' | 'other')[] // Peut avoir plusieurs catégories
  icon?: string
  description: string // Description du contexte d'utilisation
}

// Compétences à personnaliser selon vos compétences réelles
const skills = [
  {
    name: 'Vue.js',
    categories: ['frontend'],
    icon: '/images/skills/vue-svgrepo-com.svg',
    description:
      "Développement d'applications web réactives, création de composants réutilisables et gestion d'état avec Pinia.",
  },
  {
    name: 'Symfony',
    categories: ['backend'],
    icon: '/images/skills/icons8-symfony.svg',
    description:
      "Développement d'APIs REST, architecture MVC, gestion des entités Doctrine et système d'authentification.",
  },
  {
    name: 'React',
    categories: ['frontend'],
    icon: '/images/skills/reactjs-svgrepo-com.svg',
    description:
      "Création d'interfaces utilisateur dynamiques, hooks personnalisés et intégration avec des APIs externes.",
  },
  {
    name: 'Node.js',
    categories: ['backend'],
    icon: '/images/skills/nodejs-icon-logo-svgrepo-com.svg',
    description:
      "Développement de serveurs web, APIs RESTful, microservices et scripts d'automatisation.",
  },
  {
    name: 'Flutter',
    categories: ['frontend', 'backend'],
    icon: '/images/skills/flutter-svgrepo-com.svg',
    description: 'Applications mobiles cross-platform et intégration avec Firebase.',
  },
  {
    name: 'JavaScript',
    categories: ['frontend', 'backend'],
    icon: '/images/skills/javascript-svgrepo-com.svg',
    description:
      'Programmation ES6+, manipulation du DOM, programmation asynchrone et développement full-stack.',
  },
  {
    name: 'TypeScript',
    categories: ['frontend', 'backend'],
    icon: '/images/skills/typescript-icon-svgrepo-com.svg',
    description:
      'Typage statique pour JavaScript, interfaces complexes, génériques et amélioration de la qualité du code.',
  },
  {
    name: 'PHP',
    categories: ['backend'],
    icon: '/images/skills/php-svgrepo-com.svg',
    description:
      'Développement web backend, frameworks modernes, gestion de bases de données et architecture MVC.',
  },
  {
    name: 'HTML',
    categories: ['frontend'],
    icon: '/images/skills/html-5-svgrepo-com.svg',
    description:
      'Structuration sémantique de pages web, éléments HTML5, accessibilité et bonnes pratiques pour le référencement.',
  },
  {
    name: 'CSS',
    categories: ['frontend'],
    icon: '/images/skills/css-3-svgrepo-com.svg',
    description:
      'Stylisation avancée, design responsive et accessibilité.',
  },
  {
    name: 'SQL',
    categories: ['backend'],
    icon: '/images/skills/sql-svgrepo-com.svg',
    description:
      'Conception de bases de données, requêtes complexes, optimisation des performances et procédures stockées.',
  },
  {
    name: 'Git',
    categories: ['other'],
    icon: '/images/skills/git-svgrepo-com.svg',
    description:
      'Gestion de versions, workflows collaboratifs, résolution de conflits et stratégies de branching.',
  },
  {
    name: 'Docker',
    categories: ['backend', 'other'],
    icon: '/images/skills/docker-svgrepo-com.svg',
    description:
      "Containerisation d'applications, docker-compose, déploiement et orchestration de services.",
  },
  {
    name: 'UI/UX Design',
    categories: ['frontend', 'other'],
    icon: '/images/skills/figma-svgrepo-com.svg',
    description:
      "Conception d'interfaces intuitives, prototypage, tests utilisateur et design thinking.",
  },
] as Skill[]

// Catégories
const categories = [
  { id: 'frontend', name: 'Frontend', color: '#3498db' },
  { id: 'backend', name: 'Backend', color: '#2ecc71' },
  { id: 'other', name: 'Autres', color: '#e74c3c' },
]

// Filtres
const selectedCategory = ref('all')

// Compétences filtrées
const filteredSkills = computed(() => {
  if (selectedCategory.value === 'all') {
    return skills
  }
  return skills.filter((skill) =>
    skill.categories.includes(selectedCategory.value as 'frontend' | 'backend' | 'other'),
  )
})

// Fonction pour obtenir la couleur de catégorie
const getCategoryColor = (categoryId: string): string => {
  const category = categories.find((c) => c.id === categoryId)
  return category ? category.color : '#95a5a6'
}

// Fonction pour obtenir la couleur principale d'une compétence (première catégorie)
const getSkillColor = (skill: Skill): string => {
  return skill.categories.length > 0 ? getCategoryColor(skill.categories[0]) : '#95a5a6'
}
</script>

<template>
  <section id="skills" class="skills-section">
    <h2 class="section-title">Mes compétences</h2>

    <div class="category-filters">
      <button
        class="filter-button"
        :class="{ active: selectedCategory === 'all' }"
        @click="selectedCategory = 'all'"
      >
        Toutes
      </button>
      <button
        v-for="category in categories"
        :key="category.id"
        class="filter-button"
        :class="{ active: selectedCategory === category.id }"
        :style="{ '--category-color': category.color }"
        @click="selectedCategory = category.id"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="skills-grid">
      <div v-for="skill in filteredSkills" :key="skill.name" class="skill-card">
        <div class="skill-header">
          <div class="skill-icon" :style="{ backgroundColor: `${getSkillColor(skill)}15` }">
            <img
              v-if="skill.icon && skill.icon.startsWith('/')"
              :src="skill.icon"
              :alt="`${skill.name} logo`"
              class="skill-logo"
            />
            <span v-else class="skill-emoji">{{ skill.icon || '💻' }}</span>
          </div>
          <div class="skill-info">
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>
        </div>
        <div class="skill-categories">
          <span
            v-for="category in skill.categories"
            :key="category"
            class="category-badge"
            :style="{ backgroundColor: getCategoryColor(category) }"
          >
            {{ categories.find((c) => c.id === category)?.name }}
          </span>
        </div>
        <div class="skill-description">
          <p class="description-text">{{ skill.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 2rem 0;
  margin-bottom: 3rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  border-radius: 2px;
}

.category-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.filter-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button.active {
  background-color: #3498db;
  color: white;
}

.filter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  border-radius: 8px;
  padding: 8px;
}

.skill-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.skill-emoji {
  font-size: 1.5rem;
}

.skill-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.skill-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.category-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 500;
}

.skill-description {
  margin-top: 0.5rem;
}

.description-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text-muted, #666);
  margin: 0;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
