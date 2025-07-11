<script setup lang="ts">
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'

// État du formulaire
const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)

// Fonction pour envoyer le formulaire (à implémenter avec votre service d'envoi d'emails)
const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulation d'envoi d'email (remplacer par votre service)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Réussite
    submitStatus.value = 'success'
    // Réinitialiser le formulaire
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    // Échec
    submitStatus.value = 'error'
    console.error("Erreur lors de l'envoi du message:", error)
  } finally {
    isSubmitting.value = false
  }
}

// Coordonnées
const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'giordana.alex@gmail.com',
    link: 'mailto:giordana.alex@gmail.com',
  },
  {
    icon: '📱',
    label: 'Téléphone',
    value: '+33 7 67 06 39 41',
    link: 'tel:+33767063941',
  },
  {
    icon: '📍',
    label: 'Localisation',
    value: 'Villeurbanne, France',
    link: 'https://maps.google.com/?q=Villeurbanne,France',
  },
] 
</script>

<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Me contacter</h2>

    <div class="contact-container">
      <div class="contact-info">
        <div class="info-header">
          <h3>Mes coordonnées</h3>
          <p>
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de
            collaboration.
          </p>
        </div>

        <div class="info-items">
          <div v-for="(info, index) in contactInfo" :key="index" class="info-item">
            <div class="info-icon">{{ info.icon }}</div>
            <div class="info-content">
              <h4>{{ info.label }}</h4>
              <a :href="info.link" target="_blank">{{ info.value }}</a>
            </div>
          </div>
        </div>

        <div class="social-media">
          <h4>Retrouvez-moi sur</h4>
          <SocialLinks size="large" />
        </div>
      </div>

      <div class="contact-form">
        <h3>Envoyez-moi un message</h3>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" v-model="name" placeholder="Votre nom" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Votre email" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="message"
              placeholder="Votre message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="isSubmitting">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>

          <div v-if="submitStatus === 'success'" class="status-message success">
            Message envoyé avec succès !
          </div>

          <div v-if="submitStatus === 'error'" class="status-message error">
            Une erreur est survenue. Veuillez réessayer.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.contact-info,
.contact-form {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.info-header {
  margin-bottom: 2rem;
}

.info-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  min-width: 2rem;
  text-align: center;
}

.info-content h4 {
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.info-content a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #3498db;
}

.social-media h4 {
  margin-bottom: 1rem;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 4px;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  background-color: rgba(52, 152, 219, 0.2);
}

.social-icon {
  margin-right: 0.5rem;
}

.contact-form h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-background-mute);
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-text);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #2980b9;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  text-align: center;
}

.status-message.success {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}

.status-message.error {
  background-color: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
}

@media (min-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
