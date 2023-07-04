# E-Courtage
[![](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
[![](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

E-courtage est une solution de courtage en ligne permettant la mise en relation de chercheurs de prêts immobiliers et de banques en mesure de les financer. Découvrez dès maintenant e-courtage sur notre [site](https://yoyo53.github.io/e-courtage).


## Démonstration

Afin de démontrer la viabilité de cette solution, une version de démonstration a été déployée depuis ce dépôt GitHub.  
La base de données PostgreSQL est déployée sur [neon.tech](https://neon.tech), le back-end sur [Fly.io](https://fly.io) et le front-end sur [GitHub Pages](https://pages.github.com/).  
URL de l'API (back-end) : <https://e-courtage-back.fly.dev/>  
URL du site web (front-end) : <https://yoyo53.github.io/e-courtage>


## Release Note - Version 1.0.0 (04/07/2023):

Cette version marque le déploiement initial d'e-courtage en production. s'agit d'une étape majeure dans le développement du projet et offre les fonctionnalités de base pour permettre aux clients et aux banques de se connecter, d'accéder à leurs espaces respectifs et de gérer leurs demandes.


### Fonctionnalités clés
- Inscription et connexion des utilisateurs : Les clients et les banques peuvent créer un compte et se connecter au site pour accéder aux différentes fonctionnalités du site.

- Gestion du profil client : Les clients peuvent accéder à leur profil pour modifier leurs informations et les fichiers liés à leur compte.

- Création de demandes de prêt : Les clients peuvent créer des demandes de prêt en y attachant des fichiers et les envoyer aux banques. Ils peuvent également les modifier et les supprimer par la suite.

- Consultation des demandes : Les banques peuvent consulter les demandes de prêt envoyées par les clients puis les accepter ou les refuser. Accepter la demande enverra une notification au client.

- Notifications par mail : Des notifications mails sont envoyées aux clients et aux banques lors de certains événements importants (compte activé, demande acceptée...).

- Modération : L'administrateur peut accéder à la liste des clients, banques et demandes, et en supprimer si nécessaire. Les comptes de banques doivent également être validés par un administrateur avant d'être activés.

- Sécurité des données : Les données des utilisateurs sont stockées de manière sécurisée, et les interactions avec le back-end sont protégées via des mesures d'authentification et d'autorisation.


### Prochaines étapes
Cette version initiale fournit une base solide pour e-courtage, mais il reste encore un certain nombre de fonctionnalités et d'améliorations à ajouter. Voici quelques-unes des prochaines étapes prévues :

- Filtrage des banques : Ajout de fonctionnalités pour envoyer les demandes de prêts uniquement aux banques choisies par l'utilisateur.

- Chat entre  clients et banques : Mise en place d'un système de chat permettant aux client et aux banque de discutter directement sur le site e-courtage.

- Algorithme de classification : Création d'un algorithme de machine learning classant les demandes des clients suivant leur qualité globale.


## Installation

Cette application web ayant été réalisée en mode n-tier, cela signifie qu’elle est constituée de trois parties distinctes pouvant ainsi être déployée de manière indépendante (possiblement sur des serveurs différents) :
- Les bases de données utilisées par l’application (Postgres et Firebase Storage)
- Le back-end (API Express.js pour interagir avec les bases de données)
- Le front-end (site web statique qui interagit avec l’API)


### Création des bases de données

La première étape du déploiement consiste donc à créer et configurer ces bases de données utilisées par l’application. Elles sont au nombre de deux :
-	Une base de données PostgreSQL pour stocker toutes les données textuelles
-	Un bucket Firebase Storage pour stocker les documents et images


#### <ins>Étape 1 :</ins> Création de la base de données PostgreSQL
1. Créez une nouvelle instance PostgreSQL sur l’hébergeur de votre choix (ou votre propre serveur).
2. Dans cette instance, créez une nouvelle base de données ainsi qu’un nouvel utilisateur ayant tous les droits sur cette base de données.
3. Conservez le nom de domaine de l’instance PostgreSQL, le nom de la base de donnée ainsi que le nom et le mot de passe de l’utilisateur pour les étapes suivantes.


#### <ins>Étape 2 :</ins> Création du bucket Firebase Storage
1. Rendez-vous sur le site Web de Firebase (https://firebase.google.com/) et créez un nouveau compte si vous n'en avez pas déjà un.
2. Dans la console Firebase, ajoutez votre projet en cliquant sur le bouton "Ajouter un projet" et suivez les instructions pour le configurer.
3. Une fois le projet créé, accédez à la section "Storage" dans la console Firebase.
4. Activez le stockage et suivez les instructions pour configurer votre bucket de stockage en mode production.
5. Enregistrez ensuite votre application web en cliquant sur le bouton “Ajouter une application” et ignorez la partie “Ajouter le SDK firebase”.
6. Rendez-vous ensuite dans les paramètres de votre projet, partie “comptes de service” et cliquez sur le bouton “Générer une nouvelle clé privée”. 
7. Conservez le fichier JSON ainsi généré pour les étapes suivantes.


###	Utilisation d’un mail d'application

Assurez-vous d’avoir créé un compte google. Ensuite, il faudra autoriser les applications tierces à utiliser ce mail pour automatiser l’envoi de mail.


#### <ins>Étape 1 :</ins> Activer l’authentification en 2 étapes
1.	Aller sur le lien suivant pour activer l’authentification en 2 étapes sur le compte :  
    <https://myaccount.google.com/u/1/signinoptions/two-step-verification>


#### <ins>Étape 2 :</ins> Créer un mot de passe d’application
1.	Aller sur le lien suivant et créé un mot de passe pour application :  
    <https://myaccount.google.com/u/1/apppasswords>
2.	Sélectionnez l’application Messagerie et l’appareil Ordinateur Windows.
3.	Conservez le mot de passe pour les étapes suivantes.


### Déploiement du back-end

Assurez-vous d'avoir Node.js et Git installés sur votre machine avant de commencer.


#### <ins>Étape 1 :</ins> Cloner le dépôt GitHub
1. Ouvrez une ligne de commande ou un terminal.
2. Naviguez vers le répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/yoyo53/e-courtage.git
```


#### <ins>Étape 2 :</ins> Configuration du back-end
1. Accédez au répertoire du back-end :
```bash
cd e-courtage/back
```
2. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```


#### <ins>Étape 3 :</ins> Configuration des variables d'environnement
1. Dans le répertoire du back-end, recherchez un fichier `.env.example`.
2. Dupliquez ce fichier et renommez la copie en `.env`.
3. Ouvrez le fichier `.env` dans un éditeur de texte.
4. Configurez les variables d'environnement avec les informations de connexion pour les bases de données PostgreSQL et Firebase Storage créées précédemment.
5.	Ajoutez également l'email et le mot de passe de l’adresse email noreply créée précédemment.
6.	Enfin, ajoutez le domaine sur lequel sera déployé votre front-end ainsi que son url de base.


#### <ins>Étape 4 :</ins> Exécution du back-end
1. Exécutez la commande suivante pour démarrer le serveur :
```bash
npm start
```
Le serveur back-end est désormais en cours d'exécution.


### Déploiement du front-end

Assurez-vous d'avoir Node.js et Git installés sur votre machine avant de commencer. Si le déploiement est fait sur la même machine que le back-end, commencez directement à l’étape 2.


#### <ins>Étape 1 :</ins> Cloner le dépôt GitHub
1. Ouvrez une ligne de commande ou un terminal.
2. Naviguez vers le répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt depuis GitHub :
```bash
git clone https://github.com/yoyo53/e-courtage.git
```


#### <ins>Étape 2 :</ins> Configuration du front-end
1. Accédez au répertoire du front-end :
```bash
cd e-courtage/front
```
2. Exécutez la commande suivante pour installer les dépendances :
```bash
npm install
```


#### <ins>Étape 3 :</ins> Configuration de des paramètres du front-end
1. Dans le répertoire du front-end, recherchez un fichier `config.js`.
2. Ouvrez le fichier `config.js` dans un éditeur de texte.
3. Remplacez la valeur de la variable **api_url** par l’url de votre back-end.
4. Remplacez la valeur de la variable **base_url** par l'url de base sur laquelle votre application sera déployée.


#### <ins>Étape 4 :</ins> Compilation du front-end
1. Exécutez la commande suivante pour compiler le front-end en un site web statique :
```bash
npm run build
```
Le résultat de cette compilation sera disponible dans le dossier dist. Le contenu de ce dossier peut ensuite être déployé comme un site internet statique sur le fournisseur d’hébergement web de votre choix.
