<script >
import { store } from '../store'
export default {
    name: 'MainList',
    //data è un metodo che restituisce un oggetto
    data() {
        return {
            store,
        };
    },
};

</script>

<template>
    <!--lista elenchi risultati filtrati -->
    <div>
        <h2>Film</h2>
        <ul>
            <li v-for="film in store.movies">
                <div>{{ film.title }}</div>
                <div>{{ film.original_title }}</div>
                <div>
                    <p v-if="film.original_language === 'it'">
                        <img src="../assets/img/Flag_of_Italy.png" alt="flag">
                    </p>
                    <p v-else-if="film.original_language === 'en'">
                        <img src="../assets/img/Flag_of_the_United_Kingdom.png" alt="flag">
                    </p>
                    <p v-else>{{ film.original_language }}</p>
                </div>
                <div>{{ film.vote_average }}</div>
                <hr>
            </li>
        </ul>
        <h2>serie TV</h2>
        <ul>
            <li v-for="serie in store.series">
                <div>{{ serie.name }}</div>
                <div>{{ serie.original_name }}</div>
                <div>
                    <p v-if="serie.original_language === 'it'">
                        <img src="../assets/img/Flag_of_Italy.png" alt="flag">
                    </p>
                    <p v-else-if="serie.original_language === 'en'">
                        <img src="../assets/img/Flag_of_the_United_Kingdom.png" alt="flag">
                    </p>
                    <p v-else>{{ serie.original_language }}</p>
                </div>
                <div>{{ serie.vote_average }}</div>
                <hr>
            </li>
        </ul>
    </div>
</template>

<style scoped>
img {
    width: 30px;
}
</style>