<template>
  <div class="landing-page-container">
    <header-component />
    <div class="landing-page">
      <header>
        <h1>Trouvez votre prêt immobilier idéal avec notre plateforme de confiance !</h1>
        <h2>Connectez-vous avec des banques compétitives et trouvez les meilleures offres de prêt en quelques clics.</h2>
      </header>

      <section class="illustration">
        <img src="XXXXXX" alt="Photo d'une famille" />
      </section>

      <section class="benefits">
        <h3>Avantages clés</h3>
        <ul>
          <li>Des prêts immobiliers sur mesure pour répondre à vos besoins</li>
          <li>Accès direct aux offres de plusieurs institutions financières</li>
          <li>Processus simple et rapide de dépôt des pièces et d'évaluation des dossiers</li>
          <li>Gain de temps et d'efforts grâce à une recherche centralisée</li>
        </ul>
      </section>

      <section class="testimonials">
        <h3>Témoignages</h3>
        <div class="testimonial">
          <img src="client1.jpg" alt="Client 1" />
          <p>"Grâce à cette plateforme, j'ai pu obtenir un prêt immobilier avec un taux avantageux et sans tracas. Je la recommande vivement !"</p>
          <span>- Jean-Michel</span>
        </div>
        <div class="testimonial">
          <img src="client2.jpg" alt="Client 2" />
          <p>"Je suis impressionné par la facilité d'utilisation de cette plateforme. J'ai rapidement trouvé l'offre de prêt qui me convenait."</p>
          <span>- Matthieu Evuort</span>
        </div>
      </section>

      <section class="call-to-action">
        <h3>Rejoignez-nous !</h3>
        <div class="cta-buttons">
          <button class="cta-button">Professionnels</button>
          <button class="cta-button">Particuliers</button>
        </div>
      </section>

      <section class="reassurance">
        <h3>Nos partenaires</h3>
        <div class="partner-logos">
          <img src="bank1.png" alt="Logo SG" />
          <img src="bank2.png" alt="Logo BNP Paribas" />
          <img src="bank3.png" alt="Logo BRED" />
        </div>
        <p>Plus de XXXX prêts accordés avec succès</p>
        <p>Taux de satisfaction client de XX%</p>
      </section>
    </div>
  </div>
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  components: { HeaderComponent },
  name: 'LandingPage',
}
</script>

<style scoped>

.landing-page-container {
  max-height: 100vh;
  overflow-y: auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  margin-top: 20px;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

header h1 {
  font-size: 64px;
  font-weight: 800;
}

.illustration {
  text-align: center;
  margin-bottom: 40px;
}

.illustration img {
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
}

.benefits {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: rgba(45, 59, 84, 0.9);
  border-radius: 10px;
  margin: 20px 200px;
}

.benefits h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

.testimonials {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: rgba(45, 59, 84, 0.9);
  border-radius: 10px;
  margin: 20px 200px;
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.testimonial p {
  margin-bottom: 10px;
  font-style: italic;
}

.testimonial span {
  font-weight: bold;
}

.call-to-action {
  text-align: center;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.cta-button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #428bca;
  color: #fff;
  cursor: pointer;
}

.reassurance {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: rgba(45, 59, 84, 0.9);
  border-radius: 10px;
  margin: 20px 200px;
}

.reassurance h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

.partner-logos {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.partner-logos img {
  width: 80px;
  height: 80px;
  margin: 0 10px;
}

footer {
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
}

footer a {
  margin: 0 5px;
  text-decoration: none;
  color: #428bca;
}

</style>
