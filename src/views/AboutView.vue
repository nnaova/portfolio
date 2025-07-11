<template>
  <div class="about">
    <div class="about-content">
      <h1>À propos de moi</h1>

      <div class="about-section">
        <h2>Qui suis-je ?</h2>
        <p>
          Je suis Alexandre GIORDANA, un développeur full stack de 21 ans basé à Villeurbanne
          (69100). Actuellement en master en développement desktop, mobile et IOT chez YNOV, je suis
          passionné par la création d'applications web et mobiles modernes et performantes.
        </p>
        <p>
          Je suis à la recherche d'une alternance pour 1 an à partir d'octobre 2025, avec un rythme
          de 2 semaines en entreprise / 1 semaine en cours. Mon approche du développement est
          centrée sur la qualité du code, la collaboration et l'innovation technique.
        </p>
      </div>

      <div class="about-section">
        <h2>Expériences professionnelles</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">2023</div>
            <div class="timeline-content">
              <h3>Mentor - Lyon Ynov Campus</h3>
              <p>
                Accompagnement des étudiants de première et deuxième année dans des cours en
                autonomie et développement d'application en interne. Compétences utilisées : Golang,
                JavaScript, SQLite, PHP, Next.js, vulgarisation, prise de parole en public
              </p>
              <p class="date-range">06/2023 - 09/2025</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2022</div>
            <div class="timeline-content">
              <h3>Développeur web full stack</h3>
              <p>
                Lycée Hélène Boucher, Vénissieux - Réalisation d'une application web pour gérer la
                prise de commande dans le restaurant d'application de l'établissement. Compétences
                utilisées : PHP, SQL
              </p>
              <p class="date-range">06/2022 - 02/2023</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Formation</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">2024</div>
            <div class="timeline-content">
              <h3>Master - Expert en développement logiciel, mobile & IOT</h3>
              <p>
                Lyon Ynov Campus - Gestion de projet, méthodologie de test, pilotage de stratégie
                SI, intégration déploiement, IOT
              </p>
              <p class="date-range">À partir d'octobre 2024</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2023</div>
            <div class="timeline-content">
              <h3>Bachelor Développement</h3>
              <p>Lyon Ynov Campus - Développement mobile / API / desktop / web</p>
              <p class="date-range">09/2023 - 06/2024</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2021</div>
            <div class="timeline-content">
              <h3>BTS SIO option SLAM</h3>
              <p>
                Lycée Jacques Brel, Vénissieux - Services Informatiques aux Organisations, Solutions
                Logicielles et Applications Métiers
              </p>
              <p class="date-range">09/2021 - 07/2023</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">2018</div>
            <div class="timeline-content">
              <h3>BAC STI2D option SIN</h3>
              <p>
                Lycée Aragon - Picasso, Givors - Sciences Technologiques de l'Ingénierie et du
                Développement Durable, option Système Informatique et Numérique
              </p>
              <p class="date-range">09/2018 - 07/2021</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Ce que je fais</h2>
        <div class="services">
          <div class="service-item">
            <h3>Développement Front-end</h3>
            <p>
              Création d'interfaces utilisateur modernes, réactives et accessibles avec Vue.js,
              Flutter et TypeScript.
            </p>
          </div>

          <div class="service-item">
            <h3>Développement Back-end</h3>
            <p>
              Conception d'APIs RESTful performantes avec Node.js, Symfony et bases de données
              SQL/NoSQL.
            </p>
          </div>

          <div class="service-item">
            <h3>Développement Full Stack</h3>
            <p>
              Développement complet d'applications web et mobiles, de la conception à la mise en
              production.
            </p>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Projets personnels</h2>
        <div class="projects">
          <div class="project-item">
            <h3>SBL</h3>
            <p>Application de gestion de compétition e-sport.</p>
            <p class="tech-stack">Technologies : Vue.js, Symfony, MySQL, Git</p>
          </div>

          <div class="project-item">
            <h3>Food Guess</h3>
            <p>Application de paris sur le contenu de la collecte étudiante.</p>
            <p class="tech-stack">Technologies : Flutter, Git, Node.js</p>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Atouts</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-badge">Gestion d'équipe</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Communication</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Adaptabilité</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Patient</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Curieux</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Ouvert d'esprit</span>
          </div>
          <div class="skill-item">
            <span class="skill-badge">Anglais B2/C1</span>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <router-link to="/contact" class="cta-button">Me contacter</router-link>
        <a
          href="/documents/cv.pdf"
          class="cta-button secondary"
          download="CV_Alexandre_Giordana.pdf"
          >Télécharger mon CV</a
        >
      </div>
    </div>
  </div>
</template>

<style>
.about-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.about-content h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.about-content h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  border-radius: 2px;
}

.about-section {
  margin-bottom: 3rem;
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
  position: relative;
  padding-bottom: 0.5rem;
}

.about-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--color-primary);
}

.about-section p {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--color-primary);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--color-primary);
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
}

.timeline-content {
  padding-left: 1rem;
}

.timeline-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.services {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.service-item {
  background-color: var(--color-card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px var(--color-card-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px var(--color-card-shadow);
}

.service-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

/* Styles pour les projets personnels */
.projects {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.project-item {
  background-color: var(--color-card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px var(--color-card-shadow);
  transition: all 0.3s ease;
  border: 1px solid var(--color-border);
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px var(--color-card-shadow);
}

.project-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.tech-stack {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-text-soft);
}

/* Styles pour les atouts */
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.skill-badge {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}

.cta-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.cta-button:first-child {
  background-color: var(--color-primary);
  color: white;
}

.cta-button.secondary {
  background-color: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-primary);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .about-content {
    padding: 3rem 2rem;
  }

  .services {
    grid-template-columns: repeat(3, 1fr);
  }

  .projects {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-section {
    flex-direction: row;
    justify-content: center;
  }

  .timeline {
    padding-left: 3rem;
  }

  .timeline-marker {
    left: -3rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
  }
}
</style>
