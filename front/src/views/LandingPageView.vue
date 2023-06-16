<template>
  <div>
    <header-component/>
    <h1>Trouvez votre prêt immobilier rapidement et facilement !</h1>

    <img src="logo.jpg" alt="Logo">

    <div class="info-block">
      <p>Déposez votre demande de prêt en ligne et obtenez des offres de prêt compétitives en quelques clics seulement.</p>
      <p>Connectez-vous directement avec les institutions financières partenaires pour gagner du temps et de l'argent dans votre recherche de prêt immobilier.</p>
    </div>

    <form class="loan-form">
      <label for="loan-amount">Montant du prêt :</label>
      <input type="text" id="loan-amount">

      <label for="loan-duration">Durée du prêt :</label>
      <input type="text" id="loan-duration">

      <label for="property-type">Type de bien immobilier :</label>
      <select id="property-type">
        <option value="apartment">Appartement</option>
        <option value="house">Maison</option>
        <option value="land">Terrain</option>
      </select>

      <label for="contact">Vos coordonnées :</label>
      <input type="text" id="contact">

      <button class="cta-button">Commencer maintenant</button>
    </form>

    <div class="testimonials">
      <div class="testimonial">
        <img src="customer1.jpg" alt="Photo du client">
        <p>"Grâce à cette plateforme, j'ai trouvé le prêt parfait pour ma nouvelle maison. Je recommande vivement!"</p>
      </div>

      <div class="testimonial">
        <img src="customer2.jpg" alt="Photo du client">
        <p>"J'ai pu comparer différentes offres de prêt et choisir celle qui correspondait le mieux à mes besoins. Une expérience simple et efficace!"</p>
      </div>
    </div>

    <div class="institution-section">
      <p>Nous sommes fiers de collaborer avec les institutions financières les plus fiables et réputées du marché.</p>
    </div>

    <div class="contact-section">
      <p>Pour toute question ou assistance, n'hésitez pas à nous contacter :</p>
      <p>Téléphone : 123-456-7890</p>
      <p>E-mail : info@votreplateforme.com</p>
    </div>

    <footer>
      <ul class="footer-links">
        <li><a href="#">Conditions d'utilisation</a></li>
        <li><a href="#">Politique de confidentialité</a></li>
        <li><a href="#">Mentions légales</a></li>
      </ul>

      <div class="social-icons">
        <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
        <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
        <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: { HeaderComponent }
}
</script>

<style>
/* Styles spécifiques à votre landing page */

h1 {
  text-align: center;
}

img {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
}

.info-block {
  text-align: center;
  margin-bottom: 30px;
}

.loan-form {
  text-align: center;
  margin-bottom: 30px;
}

.testimonials {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.testimonial {
  text-align: center;
  margin: 0 20px;
}

.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.institution-section {
  text-align: center;
  margin-bottom: 30px;
}

.contact-section {
  text-align: center;
  margin-bottom: 30px;
}

footer {
  text-align: center;
  margin-top: 50px;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
}

.footer-links li {
  display: inline;
  margin-right: 10px;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a {
  margin: 0 5px;
}
</style>
