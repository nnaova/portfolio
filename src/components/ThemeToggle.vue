<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const isDarkMode = ref(false)

// Fonction pour basculer le mode sombre
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value

  // Supprimer d'abord les deux classes possibles
  document.documentElement.classList.remove('dark-mode', 'light-mode')

  // Ajouter la classe appropriée
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark-mode')
  } else {
    document.documentElement.classList.add('light-mode')
  }

  // Sauvegarder la préférence dans le localStorage
  localStorage.setItem('theme-mode', isDarkMode.value ? 'dark' : 'light')
}

// Initialiser le mode sombre en fonction de la préférence sauvegardée
onMounted(() => {
  // Vérifier la préférence sauvegardée
  const savedMode = localStorage.getItem('theme-mode')

  // Supprimer d'abord les deux classes possibles pour éviter les conflits
  document.documentElement.classList.remove('dark-mode', 'light-mode')

  if (savedMode === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark-mode')
  } else if (savedMode === 'light') {
    isDarkMode.value = false
    document.documentElement.classList.add('light-mode')
  } else {
    // Si aucune préférence n'est sauvegardée, utiliser la préférence du système
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDarkMode.value = prefersDarkMode

    if (prefersDarkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.add('light-mode')
    }
  }

  // Observer les changements de préférence système
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Ne changer automatiquement que si l'utilisateur n'a pas défini de préférence manuelle
    if (!localStorage.getItem('theme-mode')) {
      isDarkMode.value = e.matches
      document.documentElement.classList.remove('dark-mode', 'light-mode')
      document.documentElement.classList.add(e.matches ? 'dark-mode' : 'light-mode')
    }
  })
})
</script>

<template>
  <button @click="toggleDarkMode" class="theme-toggle" aria-label="Toggle Dark Mode">
    <span class="icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
    <span class="label">{{ isDarkMode ? 'Mode clair' : 'Mode sombre' }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: var(--color-text);
  font-size: 0.9rem;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.theme-toggle:hover {
  background-color: var(--color-background-soft);
  transform: translateY(-2px);
  box-shadow: 0 2px 5px var(--color-card-shadow);
}

.icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .label {
    display: none;
  }

  .theme-toggle {
    padding: 0.5rem;
  }
}
</style>
