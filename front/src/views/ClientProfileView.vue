<template>
    <div>

        <HeaderComponent/>

        <h1>This is a client profile page</h1>

        <form id="profileForm">
            <div class="mb-3">
                <label for="formName" class="form-label">Nom</label>
                <input type="text" class="form-control" id="formName"/>
            </div>
            <div class="mb-3">
                <label for="formFirstName" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="formFirstName"/>
            </div>
            <div class="mb-3">
                <label for="formEmail" class="form-label">Email</label>
                <input type="text" class="form-control" id="formEmail"/>
            </div>
            <div class="mb-3">
                <label for="formGenre" class="form-label">Genre</label>
                <input type="text" class="form-control" id="formGenre"/>
            </div>
            <div class="mb-3">
                <label for="formBirthDate" class="form-label">Date de naissance</label>
                <input type="text" class="form-control" id="formBirthDate"/>
            </div>
            <div class="mb-3">
                <label for="formTelephone" class="form-label">Telephone</label>
                <input type="text" class="form-control" id="formTelephone"/>
            </div>
            <div class="mb-3">
                <label for="formCountry" class="form-label">Pays</label>
                <input type="text" class="form-control" id="formCountry"/>
            </div>
            <div class="mb-3">
                <label for="formCity" class="form-label">Ville</label>
                <input type="text" class="form-control" id="formCity"/>
            </div>
            <div class="mb-3">
                <label for="formAddress" class="form-label">Adresse</label>
                <input type="text" class="form-control" id="formAddress"/>
            </div>
            <div class="mb-3">
                <label for="formHousingStatus" class="form-label">Statut immobilier</label>
                <input type="text" class="form-control" id="formHousingStatus"/>
            </div>
            <div class="mb-3">
                <label for="formWorkStatus" class="form-label">Situation professionnelle</label>
                <input type="text" class="form-control" id="formWorkStatus"/>
            </div>
            <div class="mb-3">
                <label for="formWorkContract" class="form-label">Contrat</label>
                <input type="text" class="form-control" id="formWorkContract"/>
            </div>
            <div class="mb-3">
                <label for="formWorkLength" class="form-label">En poste depuis</label>
                <input type="text" class="form-control" id="formWorkLength"/>
            </div>
            <div class="mb-3">
                <label for="formMainBank" class="form-label">Banque principale</label>
                <input type="text" class="form-control" id="formMainBank"/>
            </div>
            <div class="mb-3">
                <label for="formFamilyStatus" class="form-label">Situation familiale</label>
                <input type="text" class="form-control" id="formFamilyStatus"/>
            </div>
            <div class="mb-3">
                <label for="formNationality" class="form-label">Nationalité</label>
                <input type="text" class="form-control" id="formNationality"/>
            </div>
            <div class="mb-3">
                <label for="formMonthlyRevenue" class="form-label">Revenu mensuel</label>
                <input type="text" class="form-control" id="formMonthlyRevenue"/>
            </div>
            <div class="mb-3">
                <label for="formAnnualPrime" class="form-label">Prime annuelle (Optionnel)</label>
                <input type="text" class="form-control" id="formAnnualPrime"/>
            </div>
            <div>
                <label for="formCurrentRent" class="form-label">Loyer Actuel</label>
                <input type="text" class="form-control" id="formCurrentRent"/>
            </div>

            <button type="submit" class="btn btn-primary" id="saveButton">Submit</button>

        </form>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    components: { HeaderComponent }
}
</script>

<style>

    ::-webkit-scrollbar {
        display:none;
    }

    #profileForm {
        width: 50%;
        height: 75vh;
        margin: auto;
        background-color: #d9d9d9;
        padding: 20px;
        border-radius: 10px;
        overflow-y: scroll;
        color: black;
    }

    #saveButton{
        margin-top: 20px;
    }

</style>