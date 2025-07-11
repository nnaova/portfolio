import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Accueil | Portfolio',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'À propos | Portfolio',
      },
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: {
        title: 'Compétences | Portfolio',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projets | Portfolio',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact | Portfolio',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Si l'utilisateur utilise les boutons précédent/suivant, rétablir la position
    if (savedPosition) {
      return savedPosition
    }

    // Vérifier s'il y a un hash dans l'URL (pour les ancres)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Sinon, revenir en haut de la page
    return { top: 0 }
  },
})

// Mettre à jour le titre de la page à chaque navigation
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || 'Portfolio'
  next()
})

export default router
