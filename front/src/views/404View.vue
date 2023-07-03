<template>
    <div id="error404Main">
        <h1 id="error404Title">Erreur 404</h1>
        <p>La page que vous recherchez n'existe pas ou a été déplacée</p>

        <div>
            <router-link to="/">Retour à l'accueil</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#error404Main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

#error404Title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

</style>